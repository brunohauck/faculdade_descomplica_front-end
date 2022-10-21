import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { ListarComponent } from './pages/listar/listar.component';
import { LoginComponent } from './pages/login/login.component';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { ModalComponent } from './pages/modal/modal.component';
import { ParametroComponent } from './pages/parametro/parametro.component';
import { PrivadoComponent } from './pages/privado/privado.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'editar', component: EditarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'listarSimples', component: ListaSimplesComponent },
  { path: 'detalhe/:id', component: DetalheComponent},
  { path: 'json', component: ManipulandoJsonComponent},
  { path: 'parametro', component: ParametroComponent},
  { path: 'modal', component: ModalComponent},
  {
    path: 'privado',
    component: PrivadoComponent,
    canActivate: [AutorizadoGuard]
  },
  { path: 'lazzy', loadChildren: () => import('./pages/lazzy/lazzy.module').then(m => m.LazzyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
