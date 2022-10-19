import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { ParametroComponent } from './pages/parametro/parametro.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { Page1Component } from './pages/subroute/page1/page1.component';
import { Page2Component } from './pages/subroute/page2/page2.component';
import { SubrouteComponent } from './pages/subroute/subroute.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'detalhe/:id', component: DetalheComponent},
  { path: 'json', component: ManipulandoJsonComponent},
  { path: 'parametro', component: ParametroComponent},
  {
    path: 'subroute',
    component: SubrouteComponent,
    children: [
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    ],
  },
  {
    path: 'privado',
    component: PrivadoComponent,
    canActivate: [AutorizadoGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
