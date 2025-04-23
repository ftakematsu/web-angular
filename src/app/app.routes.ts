import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

/**
 * Arquivo de rotas gerais do sistema, que chama as outras rotas
 */
export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'home', // O que vai aparecer na URL
        loadChildren: () => import('./home/routes/home.routes')
    }
];
