import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

/**
 * Dashboard Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
