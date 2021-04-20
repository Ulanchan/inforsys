import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ArtikelComponent } from './artikel/artikel.component';
import { PesancComponent } from './pesanc/pesanc.component';
import { SimpanartComponent } from './simpanart/simpanart.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'simpanart',
        component: SimpanartComponent
      },
      {
        path: 'artikel',
        component: ArtikelComponent
      },
      {
        path: 'pesanc',
        component: PesancComponent
      }
    ]
  }
];
@NgModule({
  declarations: [AdminComponent, RegisterComponent, MainComponent, ArtikelComponent, PesancComponent, SimpanartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
