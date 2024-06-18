import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'dashboard', 
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule)
    }
];
