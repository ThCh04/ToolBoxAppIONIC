import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {
  json: any;
  parsedJson : any;
  newsJson : any;
  imageURL : string = '';


  constructor(public httpClient:HttpClient) { 
    this.getPageIcon();
    this.getNews();

  }

  ngOnInit() {
  }


   getPageIcon(){

  this.httpClient.get('https://techcrunch.com/wp-json/').subscribe(results =>{
    this.json = JSON.stringify(results);
    this.parsedJson = JSON.parse(this.json);
    this.imageURL = this.parsedJson.site_icon_url;
  })
 
}

getNews(){

  this.httpClient.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=3').subscribe(results =>{
    this.json = JSON.stringify(results);
    this.newsJson = JSON.parse(this.json);
  })
 
}

limpiarTexto(htmlString : string): string{

   const parser = new DOMParser();
   const parsedNewsJson = parser.parseFromString(htmlString, 'text/html');
   return parsedNewsJson.body.textContent || "";

}

}
