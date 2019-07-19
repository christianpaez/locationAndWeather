import { Component, OnInit, Input, NgZone} from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {



  @Input() mapInfo: {latitude: '',
                     longitude: ''};



  weatherReady = false;
  city: string = "";
  country: string;
  forecast: string;
  minTemp: number;
  metric: string;
  maxTemp: number;
  code: number;
  url: string;
  dayIconUrl: string;
  nightIconUrl: string;





  constructor(private apiService: ApiService, private ngZone: NgZone) { }

  ngOnInit() {}

  getLocation() {
    let lat = this.mapInfo.latitude;
    let lon = this.mapInfo.longitude;
    console.log(this.mapInfo)


  this.apiService.getLocation(lat, lon)
    .subscribe((data: any) =>{
      this.city = data.LocalizedName;
      this.country = data.Country.LocalizedName;
      this.weatherReady = true;
      this.code = data.Key;
      console.log(this.code)
      this.getWeather()
    
    },(error) => console.log('error', error)
   
     );
}

getWeather(){
  let code = this.code;
  this.apiService.getWeather(code)
    .subscribe((data: any) =>{
      this.forecast = data.Headline.Text;
      this.metric = data.DailyForecasts[0].Temperature.Minimum.Unit;
      this.minTemp = data.DailyForecasts[0].Temperature.Minimum.Value;
      this.maxTemp = data.DailyForecasts[0].Temperature.Maximum.Value;
      this.url = data.Headline.Link;
      let dayIcon =  data.DailyForecasts[0].Day.Icon;
      let nightIcon =  data.DailyForecasts[0].Night.Icon;
      console.log(dayIcon) 
      console.log(nightIcon) 
      this.iconUrlMaker(dayIcon, nightIcon)

      console.log(data)   
    },(error) => console.log('error', error)
   
     );
    }


    iconUrlMaker(dayIcon, nightIcon){
      let day = dayIcon.toString()
      let night = dayIcon.toString()

      if(day.length == 1){
        dayIcon = "0" + day;
      }

      let dayUrl = "https://developer.accuweather.com/sites/default/files/" + 
      day +"-s.png"

      let nightUrl = "https://developer.accuweather.com/sites/default/files/" + 
      night +"-s.png"

      this.dayIconUrl = dayUrl;
      this.nightIconUrl = nightUrl;

    }

}
