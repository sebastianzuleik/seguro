import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteEditPageRoutingModule } from './cliente-edit-routing.module';

import { ClienteEditPage } from './cliente-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClienteEditPage]
})
export class ClienteEditPageModule {}
