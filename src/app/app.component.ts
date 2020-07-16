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
  title = 'fluxsolar';
  weathers:  any[];  
  cityName = '';
  countryCode = '';
  

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    // this.getWeather(this.cityName,this.countryCode);
    // console.log('oknonoin',this.getWeather(this.cityName,this.countryCode));
    this.registerForm = this.formBuilder.group({
      cityName: ['', Validators.required],
      countryCode: ['', Validators.required]
      });   
      
  
    
    
  }


  submitProject() { 
    let city = this.registerForm.controls.cityName.value;
    console.log('llegan',city);
    // let country = this.registerForm.controls.countryCode.value;
    if (city == 'santiago') {
      let country = 'region-metropolitana'
      console.log('llegan',city,country);
      this.getWeather(city,country);  
      
    }
    else if (city =='buenos-aires') {
      let country = 'distrito-federal'
      console.log('llegan',city,country);
      this.getWeather(city,country);  
    }
    else if (city == 'new-york') {
      let country = 'new-york'
      console.log('llegan',city,country);
      this.getWeather(city,country);  
    }
    else if (city == 'caracas') {
      let country = 'distrito-federal'
      console.log('llegan',city,country);     
      this.getWeather(city,country);   
    }else{
      let city = this.registerForm.controls.cityName.value;
      let country = this.registerForm.controls.countryCode.value;
      console.log('llegan',city,country);
      this.getWeather(city,country); 

    }

  
  }

    getWeather(cityName:any , countryCode: string): void {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log('urleeeeeeee',this.weatherService);
          
          console.log(res); 
          this.weathers = res.data.weather; 
          
        },
        err => {
          console.log(err);
        }
      );
  } 



  

}
