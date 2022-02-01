import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AcumuladorComponent } from './components/acumulador/acumulador.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { CardComponent } from './components/card/card.component';
import { BtnloadingDirective } from './directives/btnloading.directive';

const exportComponents =   [
    CronometroComponent,
    AcumuladorComponent,
    CardComponent,
  BtnloadingDirective
  ]
@NgModule({
  declarations: [ ...exportComponents],
  exports:exportComponents,
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
