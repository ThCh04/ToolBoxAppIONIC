import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Genero', url: '/genero', icon: 'male-female' },
    { title: 'Edad', url: '/edad', icon: 'walk' },
    { title: 'Universidades', url: '/universidades', icon: 'business' },
    { title: 'Clima', url: '/clima', icon: 'sunny' },
    { title: 'Wordpress', url: '/wordpress', icon: 'globe' },
    { title: 'Contacto', url: '/acercade', icon: 'people-circle' },
  ];
 
  constructor() {}
}
