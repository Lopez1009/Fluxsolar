import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  url: string = '';
  apiKey: string = '&key=186abc310518457cbf2180608201507&format=json ';


  constructor(
    private _http: HttpClient
  ) { 
    this.url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?q=`;
    // this.url = 'http://dummy.restapiexample.com/api/v1/employees';
    // this.url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?q=London,united+kingdom&key=186abc310518457cbf2180608201507&format=json`;


    
  }
  getWeather(cityName:any, countryCode: string): Observable<any>{
    
    let headers = new HttpHeaders().set('Content-Type','application/json');     
    return this._http.get(this.url+cityName+','+countryCode+this.apiKey, {headers:headers} );
  }

} 
