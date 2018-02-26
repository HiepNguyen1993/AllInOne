import { SideNavComponent } from './pages/dashboard/side-nav/side-nav.component';
import { ScriptLoaderService } from './shared/services/script-loader.service';
import { AuthGuard } from './common/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './pages/app/app.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutingDefined } from './app.routes';
import { CoreModule } from '../core/core.module';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from './translate/translate.service';
import { LoginService } from './pages/login/@services/login.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { HeaderComponent } from './pages/dashboard/header/header.component';
import { FooterComponent } from './pages/dashboard/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RoutingDefined,
    FormsModule,
    HttpModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
  ],
  providers: [
    TranslateService,
    LoginService,
    AuthGuard,
    ScriptLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
