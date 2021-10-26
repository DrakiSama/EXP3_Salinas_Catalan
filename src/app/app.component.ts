import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'clipboard',
      name: 'Registrate!',
      redirecTo: '/input'
    },
    {
      icon: 'newspaper',
      name: 'Noticias',
      redirecTo: '/cachupin'
    },
    {
      icon: 'accessibility',
      name: 'Ayudanos a Mejorar!',
      redirecTo: '/datos'
    },
    
  ];
  

}
