import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from '../loader/loader.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
  
  ]
})
export class IntranetModule { }
