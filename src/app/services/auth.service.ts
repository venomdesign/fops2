import 'rxjs/add/operator/filter';

import * as auth0 from 'auth0-js';

import { AUTH_CONFIG } from './auth0-variables';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    userProfile: any;

    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        responseType: AUTH_CONFIG.responseType,
        audience: AUTH_CONFIG.audience,
        redirectUri: AUTH_CONFIG.callbackURL,
        scope: AUTH_CONFIG.scope
    });

    constructor(public router: Router) { }

    public login(): void {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/']);
            } else if (err) {
                console.log(err);
                this.router.navigate(['/']);
                // alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    public getProfile(cb): void {
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken) {
            throw new Error('Missing access token');
        }

        const self = this;
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                console.log('User profile: ', profile);
                self.userProfile = profile;
            }

            cb(err, profile);
        });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        const scopes = authResult.scope || '';

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('scopes', JSON.stringify(scopes));
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('scopes');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    public userHasScopes(scopes: Array<string>): boolean {
        const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
        return scopes.every(scope => grantedScopes.includes(scope));
    }
}
