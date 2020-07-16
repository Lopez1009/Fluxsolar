import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'; 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public registerForm: FormGroup; 
  public isMenuCollapsed = true;
  isCollapsed: boolean;
  cityName = '';
  countryCode = '';
  locations: any[]; 
  weathers:  any[];   

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      cityName: ['', Validators.required],
      countryCode: ['', Validators.required]
      });   
          
  }


  submitProject() { 
    let city = this.registerForm.controls.cityName.value;

    if (city == 'santiago') {
      let country = 'region-metropolitana'
      this.getWeather(city,country);  
      
    }
    else if (city =='buenos-aires') {
      let country = 'distrito-federal'
      this.getWeather(city,country);  
    }
    else if (city == 'new-york') {
      let country = 'new-york'
      this.getWeather(city,country);  
    }
    else if (city == 'caracas') {
      let country = 'distrito-federal'
      this.getWeather(city,country);   
    }else{
      let city = this.registerForm.controls.cityName.value;
      let country = this.registerForm.controls.countryCode.value;
      this.getWeather(city,country); 

    }

  
  }

    getWeather(cityName:any , countryCode: string): void {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          this.locations = res.data.request; 
          
          this.weathers = res.data.current_condition; 
          
        },
        err => {
          console.log(err);
        }
      );
  } 



  

}
