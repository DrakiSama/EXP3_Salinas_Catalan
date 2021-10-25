import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'cafe-outline',
      name: 'Noticias',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'paw-outline',
      name: 'Acerca de Nosotros',
      redirecTo: '/alert'
    },
    {
      icon: 'paw-outline',
      name: 'cachupin',
      redirecTo: '/cachupin'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
