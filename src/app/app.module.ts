import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { ServerComponent } from './server/server.component';
import { TasComponent } from './tas/tas.component';
import { TsComponent } from './ts/ts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NetworkComponent,
    ServerComponent,
    TasComponent,
    TsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
