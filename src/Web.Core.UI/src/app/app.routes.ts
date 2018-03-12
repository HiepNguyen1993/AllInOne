import { PackageDetailComponent } from './pages/package/package-detail/package-detail.component';
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
import { ProductTypeComponent } from './pages/product/product-type/product-type.component';

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
            { path: 'product', component: ProductOverviewComponent, canActivate: [AuthGuard] },
            { path: 'create-product', component: ProductDetailComponent, canActivate: [AuthGuard] },
            { path: 'create-product-type', component: ProductTypeComponent, canActivate: [AuthGuard] },
            { path: 'package', component: PackageOverviewComponent, canActivate: [AuthGuard] },
            { path: 'create-package', component: PackageDetailComponent, canActivate: [AuthGuard] }
        ]},

];

export const RoutingDefined: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
