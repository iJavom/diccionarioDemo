import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { PalabrasService } from './palabras/palabras.service';
import { HttpClientModule } from '@angular/common/http';
import { CrearComponent } from './crear/crear.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    NavHeaderComponent,
    PalabrasComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [PalabrasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
