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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
