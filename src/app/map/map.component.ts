import { Component, OnInit, Input } from '@angular/core';
import { BodyComponent } from '../body/body.component';
declare let L;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {


  @Input() mapInfo: {} = {
    latitude: null, 
    longitude: null,
    mapReady: false,
    geoNotSupported: false,
    positionError: false,
    locating: false
  };

  


  constructor() { }

  ngOnInit() {}


 
  
  leafletMap(lat, lon){
  var mymap = L.map('mapid').setView([lat, lon], 17);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiY2hyaXN0aWFuMTg5NCIsImEiOiJjank3ZHM2Z2cwczZjM2RvMGxibXQzcng3In0.YUUKGnntHpUmPSdVuFQ-ww'
  }).addTo(mymap);

var popup = L.popup()
    .setLatLng([lat, lon])
    .setContent("You are here.")
    .openOn(mymap);


  }



 

}

  




