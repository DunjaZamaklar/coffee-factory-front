import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login', loadComponent: () => import('./pages/login/login.component').then(component => component.LoginComponent)
    },
    {
        path: 'pages',
        loadComponent: () => import('./layout/main-layout/main-layout.component').then(component => component.MainLayoutComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component').then(component => component.HomeComponent)
            }
        ]
    }
];
