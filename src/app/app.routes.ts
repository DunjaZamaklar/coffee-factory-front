import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './components/supplier/supplier.component';

export const routes: Routes = [
    
    { path: '',title:"Home", component: HomeComponent },
    { path: 'home',title:"Home", component: HomeComponent },
    { path: 'login', title:"Login", component: LoginComponent},
    { path: 'supplier', title:"Supplier", component: SupplierComponent},

];
