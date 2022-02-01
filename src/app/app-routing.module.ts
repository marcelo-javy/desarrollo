import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //home/page-principal
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
  {path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)},
 // {path: '', redirectTo: '/home/page-principal', pathMatch:'prefix' }
  {path: '', redirectTo: '/catalogo/tipo-cuenta', pathMatch:'full' },
  {path: '**', redirectTo: '/catalogo/tipo-cuenta'},
  //{path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
