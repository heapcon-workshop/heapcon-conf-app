import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {DelegatesPage} from './delegates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
          {
            path: '',
            component: DelegatesPage
          }
        ]
    )
  ],
  declarations: [DelegatesPage]
})
export class DelegatesPageModule{}