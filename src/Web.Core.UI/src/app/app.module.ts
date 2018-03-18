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
import { HeaderComponent } from './pages/dashboard/header/header.component';
import { FooterComponent } from './pages/dashboard/footer/footer.component';
import { CustomerOverviewComponent } from './pages/customer/customer-overview/customer-overview.component';
import { CustomerDetailComponent } from './pages/customer/customer-detail/customer-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ProductOverviewComponent } from './pages/product/product-overview/product-overview.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { PackageOverviewComponent } from './pages/package/package-overview/package-overview.component';
import { PackageDetailComponent } from './pages/package/package-detail/package-detail.component';
import { PackageService } from './pages/package/@services/package.service';
import { BreadcrumComponent } from './pages/dashboard/breadcrum/breadcrum.component';
import { ProductTypeComponent } from './pages/product/product-type/product-type.component';
import { ProductTypeService } from './pages/product/@services/product-type.service';
import { AccountOverviewComponent } from './pages/account/account-overview/account-overview.component';
import { AccountDetailComponent } from './pages/account/account-detail/account-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerOverviewComponent,
    CustomerDetailComponent,
    ProductOverviewComponent,
    ProductDetailComponent,
    PackageOverviewComponent,
    PackageDetailComponent,
    BreadcrumComponent,
    ProductTypeComponent,
    AccountOverviewComponent,
    AccountDetailComponent,
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
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    TranslateService,
    LoginService,
    AuthGuard,
    ScriptLoaderService,
    PackageService,
    ProductTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
