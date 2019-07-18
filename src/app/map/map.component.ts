import { Component, OnInit, Input } from '@angular/core';
import { BodyComponent } from '../body/body.component';
declare let L;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {

  @Input('mapInfo') mapInfo;

  constructor() { }

  ngOnInit() {

    
  }


  leafletMap(){
    console.log("leaflet")

    var mymap = L.map('mapid').setView([45.815399, 15.966568], 15);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hyaXN0aWFuMTg5NCIsImEiOiJjank3ZHM2Z2cwczZjM2RvMGxibXQzcng3In0.YUUKGnntHpUmPSdVuFQ-ww'
}).addTo(mymap);

var circle = L.circle([45.815399, 15.966568], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(mymap);
    
  }

}
