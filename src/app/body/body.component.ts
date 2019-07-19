import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { WeatherComponent } from '../weather/weather.component';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mapInfo  = {
    latitude: null, 
    longitude: null,
    mapReady: false,
    geoNotSupported: false,
    positionError: false,
    locating: false
  }


  constructor(private mapComponent : MapComponent) { }

  ngOnInit() {}
  getLocation() {

    if (!navigator.geolocation){
      console.log("error")
      this.mapInfo.geoNotSupported = true;
      return;
    }
    
    navigator.geolocation.getCurrentPosition((position: Position) => {
          let lat =  position.coords.latitude;
          let lon =  position.coords.longitude;
          this.mapInfo.locating = false;
          this.mapInfo.latitude = lat;
          this.mapInfo.longitude = lon;     
          this.mapInfo.mapReady = true;
          this.mapComponent.leafletMap(lat, lon);
  
    },(error: PositionError) => {console.log(error)
                                this.mapInfo.positionError = true;
                                this.mapInfo.locating = false;
    });

this.mapInfo.locating = true 
  }


}
