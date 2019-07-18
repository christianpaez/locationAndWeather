import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';


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
        console.log("Latitude: " + position.coords.latitude +
          "Longitude: " + position.coords.longitude); 
          this.mapInfo.locating = false;
          this.mapInfo.latitude = position.coords.latitude;
          this.mapInfo.longitude = position.coords.longitude;     
          this.mapInfo.mapReady = true;
          this.mapComponent.leafletMap();
  
    },(error: PositionError) => {this.mapInfo.positionError = true;
                                this.mapInfo.locating = false;
    });

this.mapInfo.locating = true 
  }


}
