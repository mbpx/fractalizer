import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FractalDisplayComponent } from './pages/fractal-display/fractal-display.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeModule } from './pages/home/home.module';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
