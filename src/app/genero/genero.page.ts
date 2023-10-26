import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
 public alertButtons = ['OK'];
  json: any
  genero : string = '';
  parsedJson : any
  mensaje : string = '';
  imgRoute : string = 'assets/img/blank.jpg';

  nombre : string = '';

  constructor(public httpClient:HttpClient) {
   }

  ngOnInit() {
  }


  getGenero(nombre : any){

  this.httpClient.get('https://api.genderize.io/?name='+nombre).subscribe(results =>{
    this.json = JSON.stringify(results);
    this.parsedJson = JSON.parse(this.json);

    if(this.parsedJson.gender == "male"){
      this.mensaje = "Masculino";
      this.imgRoute = 'assets/img/blue.png';

    }else if(this.parsedJson.gender == "female"){
      this.mensaje = "Femenino";
      this.imgRoute= 'assets/img/pink.jpg';
    }else{
      this.mensaje = "No se pudo identificar"
      this.imgRoute= 'assets/img/blank.jpg';
    }

  })
 
}


}



