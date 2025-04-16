import { Routes } from '@angular/router';

/**
 * Arquivo de rotas gerais do sistema, que chama as outras rotas
 */
export const routes: Routes = [
    {
        path: 'home', // O que vai aparecer na URL
        loadChildren: () => import('./home/routes/home.routes')
    }
];
