import { Http, HttpModule, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ChartsModule } from 'ng2-charts';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';
import { ScopeGuardService } from './services/scope-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { PasswordComponent } from './password/password.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { DataService } from './services/data.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent,
        CallbackComponent,
        PasswordComponent,
        SandboxComponent,
        RegistrationComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SlimLoadingBarModule.forRoot(),
        ToastModule.forRoot(),
        [
            ChartsModule
        ]
    ],
    providers: [
        AuthService,
        AuthGuardService,
        GlobalService,
        ScopeGuardService,
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
