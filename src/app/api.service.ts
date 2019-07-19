import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Hc4GD5yzRaUZ33GLWW0ZiWKVFARsEY4A&q="

  constructor(private httpClient: HttpClient) { }


  getLocation(lat,lon) {
      console.log(lat)    
      console.log(lon) 
      let and = "%2C";
      let apiUrl = this.baseUrl + lat + and + lon
     return this.httpClient.get(apiUrl);
  }


  weatherBaseUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/"
  getWeather(code) {
    console.log(code)    
    let key = "?apikey=Hc4GD5yzRaUZ33GLWW0ZiWKVFARsEY4A&metric=true";
    let apiUrl = this.weatherBaseUrl + code + key 
   return this.httpClient.get(apiUrl);
}

}
