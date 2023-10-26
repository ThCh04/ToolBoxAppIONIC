import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  json: any
  parsedJson : any
  nombre : string = '';
  edad : number = 0;
  mensaje : string ='';
  imageURL : string= 'assets/img/blank.jpg';

  constructor(public httpClient:HttpClient) { }

  ngOnInit() {
  }

  getEdad(nombre : any){

  this.httpClient.get('https://api.agify.io/?name='+nombre).subscribe(results =>{
    this.json = JSON.stringify(results);
    this.parsedJson = JSON.parse(this.json);
    this.edad = this.parsedJson.age;

    if(this.edad >= 14 && this.edad <=26){
      this.mensaje ='Esta persona es Joven'
      this.imageURL = 'assets/img/young.jpeg'

    }else if(this.edad >= 27 && this.edad <=59){
       this.mensaje ='Esta persona es Adulta'
       this.imageURL = 'assets/img/adult.jpg'

    }else if(this.edad >= 60){
      this.mensaje ='Esta persona es Anciana'
      this.imageURL = 'assets/img/ancient.jpg'

    }


  })
 
}

}
