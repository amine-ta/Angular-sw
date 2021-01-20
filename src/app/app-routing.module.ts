import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailSwComponent } from './detail-sw/detail-sw.component';
import { SwListComponent } from './sw-list/sw-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/sw.list', pathMatch: 'full' },
  { path: 'sw.list', component: SwListComponent },
  { path: 'detail/:id', component: DetailSwComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
  
export class AppRoutingModule {

  
 }
