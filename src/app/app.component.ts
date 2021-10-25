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
      icon: 'newspaper',
      name: 'Noticias',
      redirecTo: '/action-sheet'
    }, 
    {
      icon: 'clipboard',
      name: 'Registrate!',
      redirecTo: '/input'
    },
    {
      icon: 'clipboard',
      name: 'test',
      redirecTo: '/alert'
    },
    {
      icon: 'clipboard',
      name: 'cachupin',
      redirecTo: '/cachupin'
    },
    {
      icon: 'accessibility',
      name: 'Ayudanos a Mejorar!',
      redirecTo: '/datos'
    },
    
  ];
  

}
