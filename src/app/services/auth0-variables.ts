interface AuthConfig {
    clientID: string;
    domain: string;
    responseType: string;
    audience: string;
    callbackURL: string;
    scope: string;
}

export const AUTH_CONFIG: AuthConfig = {
    clientID: '45T8uck4sGk2AnwB0RqW6GPjp9uvkMTJ',
    domain: 'rc-dev-fnf.auth0.com',
    responseType: 'token id_token',
    audience: 'https://rc-dev-fnf.auth0.com/userinfo',
    callbackURL: 'http://localhost:4200/callback',
    scope: 'openid profile groups'
};
