import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { TicketServiceService } from './services/ticket-service.service';
import { BaseService } from './models/base-service';
import { DetailTicketsComponent } from './detail-tickets/detail-tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewTicketsComponent,
    DetailTicketsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TicketServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
