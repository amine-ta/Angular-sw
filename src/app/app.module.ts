import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwListComponent } from './sw-list/sw-list.component';
import { VaisseauService } from './sw.service';
import { DetailSwComponent } from './detail-sw/detail-sw.component';
import { PiloteDetailComponent } from './pilote-detail/pilote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SwListComponent,
    DetailSwComponent,
    PiloteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VaisseauService],
  bootstrap: [AppComponent]
})
export class AppModule { }
