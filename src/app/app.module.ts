import { Http, HttpModule, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ChartsModule } from 'ng2-charts';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './register/routes';
import { AppComponent } from './app.component';
import { ThankyouComponent } from "./register/thankyou/thankyou.component";
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
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent,
        CallbackComponent,
        PasswordComponent,
        SandboxComponent,
        RegisterComponent,
        ThankyouComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
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
    bootstrap: [AppComponent, RegisterComponent]
})
export class AppModule { }
