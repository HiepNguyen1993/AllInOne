import { CustomerResolver } from './pages/customer/@services/customer.resolver';
import { AccountResolver } from './pages/account/@services/account.resolver';
import { ProductOverviewComponent } from './pages/product/product-overview/product-overview.component';
import { CustomerDetailComponent } from './pages/customer/customer-detail/customer-detail.component';
import { CustomerOverviewComponent } from './pages/customer/customer-overview/customer-overview.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';
import { PackageOverviewComponent } from './pages/package/package-overview/package-overview.component';
import { PackageDetailComponent } from './pages/package/package-detail/package-detail.component';
import { ProductTypeComponent } from './pages/product/product-type/product-type.component';
import { AccountOverviewComponent } from './pages/account/account-overview/account-overview.component';
import { AccountDetailComponent } from './pages/account/account-detail/account-detail.component';
import { PackageResolver } from './pages/package/@services/package.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    {
        path: 'dsb', component: DashboardComponent, canActivate: [AuthGuard],
        children: [
            { path: 'logout', component: LogoutComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

            { path: 'customer', component: CustomerOverviewComponent, canActivate: [AuthGuard] },
            { path: 'create-customer', component: CustomerDetailComponent, canActivate: [AuthGuard] },
            { path: 'edit-customer/:id', component: CustomerDetailComponent, canActivate: [AuthGuard], resolve: {customer: CustomerResolver} },

            { path: 'product', component: ProductOverviewComponent, canActivate: [AuthGuard] },
            { path: 'create-product', component: ProductDetailComponent, canActivate: [AuthGuard] },
            { path: 'create-product-type', component: ProductTypeComponent, canActivate: [AuthGuard] },

            { path: 'package', component: PackageOverviewComponent, canActivate: [AuthGuard] },
            { path: 'create-package', component: PackageDetailComponent, canActivate: [AuthGuard] },
            { path: 'edit-package/:id', component: PackageDetailComponent, canActivate: [AuthGuard], resolve: {package: PackageResolver} },
            
            { path: 'account', component: AccountOverviewComponent, canActivate: [AuthGuard] },
            { path: 'create-account', component: AccountDetailComponent, canActivate: [AuthGuard] },
            { path: 'edit-account/:id', component: AccountDetailComponent, canActivate: [AuthGuard], resolve: {account: AccountResolver} }
        ]},

];

export const RoutingDefined: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
