import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { stringify } from 'querystring';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}
interface nickname{
  nombre: string;
  password: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  
  nickname = JSON.parse(localStorage.getItem(("usuario")));
  

  

  componentes : Componente[] = [
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

  constructor(private menuController: MenuController,
    public navCtrl: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    console.log("usuario: ", this.nickname)
    
  }
  

  mostrarMenu(){
    this.menuController.open('first');
  }

  
}
