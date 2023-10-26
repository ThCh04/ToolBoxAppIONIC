import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage implements OnInit {

  json: any
  parsedJson : any
  pais : string = '';
  edad : number = 0;
  mensaje : string ='';
  imageURL : string= 'assets/img/blank.jpg';

  constructor(public httpClient:HttpClient) {

   }

  ngOnInit() {
  }

   getUniversidades(pais : any){

  this.httpClient.get('http://universities.hipolabs.com/search?country='+pais).subscribe(results =>{
    this.json = JSON.stringify(results);
    this.parsedJson = JSON.parse(this.json);
    this.edad = this.parsedJson.age;
  })
 
}

}
