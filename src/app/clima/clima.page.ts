import { Component, OnInit } from '@angular/core';
import {environment} from './../../environments/environment';
import {HttpClient} from '@angular/common/http';

const apiCall = environment.WeatherAPI;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  weatherTemp :any
  weatherState : any
  json: any
  parsedJson : any
  today = new Date().toLocaleString();
  icon : string = '';
  

  constructor(public httpClient:HttpClient) {

    this.loadData();

   }

  ngOnInit() {
  }

loadData(){
  this.httpClient.get(apiCall).subscribe(results =>{
    this.json = JSON.stringify(results);
    this.parsedJson = JSON.parse(this.json);
    this.weatherTemp = this.parsedJson.main;
    this.weatherState = this.parsedJson.weather[0];

    if(this.weatherState.main == "Clear"){
      this.icon = "sunny"
    }else if(this.weatherState.main == "Rain"){
      this.icon = "rainy"
    }else if(this.weatherState.main == "Thunderstorm"){
      this.icon = "thunderstorm"
    }else if(this.weatherState.main == "Clouds"){
      this.icon = "cloudy"
    }
  });
  

}



}
