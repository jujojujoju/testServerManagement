import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { ServerComponent } from './server/server.component';
import { TasComponent } from './tas/tas.component';
import { TsComponent } from './ts/ts.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'network',
    component: NetworkComponent,
  },
  {
    path: 'server',
    component: ServerComponent,
  },
  {
    path: 'tas',
    component: TasComponent,
  },
  {
    path: 'ts',
    component: TsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
