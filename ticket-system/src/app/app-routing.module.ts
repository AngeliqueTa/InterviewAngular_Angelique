import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { DetailTicketsComponent } from './detail-tickets/detail-tickets.component';

const routes: Routes = [
  { path: 'view-tickets', component: ViewTicketsComponent },
  { path: 'detail-tickets', component: DetailTicketsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

