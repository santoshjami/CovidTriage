import {NgModule} from '@angular/core';

import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [
    CheckboxModule,
  ],
  exports: [
    CheckboxModule,
  ]
})
export class PrimeNGModule {}
