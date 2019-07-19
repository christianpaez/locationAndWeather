
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { BodyComponent } from './body/body.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BodyComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MapComponent, WeatherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
