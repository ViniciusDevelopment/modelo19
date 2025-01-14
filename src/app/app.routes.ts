import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AboutComponent } from './about/about.component';

// Arquivo responsavel pelas rotas da aplicação
export const routes: Routes = [
    {path: '', component: FormularioComponent},
    {path: 'about', component: AboutComponent},
];


