import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagePrincipalComponent} from "./page-principal/page-principal.component";

const routes: Routes = [
  { path: 'page-principal', component: PagePrincipalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
