import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './componentes/home/home.component';
import { ImagenesComponent} from './componentes/imagenes/imagenes.component';
import { ContactoComponent} from './componentes/contacto/contacto.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'imagenes', component: ImagenesComponent },
  {path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
