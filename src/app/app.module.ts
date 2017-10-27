import { Http, HttpModule, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ChartsModule } from 'ng2-charts';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
//import { Ng2SmartTableModule } from '../../node_modules/ng2-smart-table';
import { AppComponent } from './app.component';

import { AuthGuardService, AuthService, GlobalService, ScopeGuardService, DataService } from './services/index';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { PasswordComponent } from './password/password.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HistoryComponent } from './history/history.component';
import { WalletComponent } from './wallet/wallet.component';
import { LogoutComponent } from './logout/logout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent,
        CallbackComponent,
        PasswordComponent,
        SandboxComponent,
        RegistrationComponent,
        LoginComponent,
        ThankyouComponent,
        HeaderComponent,
        FooterComponent,
        InvoiceComponent,
        HistoryComponent,
        WalletComponent,
        LogoutComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SlimLoadingBarModule.forRoot(),
        RouterModule.forRoot(routes),
        ToastModule.forRoot(),
        [
            ChartsModule
        ],
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
