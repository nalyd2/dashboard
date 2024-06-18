import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    MatGridListModule,MatCardModule, MatButtonModule,
    CommonModule,
    RouterModule.forChild(PAGES_ROUTES)
  ]
})
export class PagesModule { }
