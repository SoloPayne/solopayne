import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: 'home',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren:() => import ('./intranet/intranet.module').then ( (m) => m.IntranetModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
