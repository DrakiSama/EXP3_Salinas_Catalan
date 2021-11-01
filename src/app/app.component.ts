import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import {AlertController} from '@ionic/angular'



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
  constructor(public alertController: AlertController, 
    public navCtrl: NavController) {}

  componentes : Componente[] = [
    {
      icon: 'clipboard',
      name: 'Registrate!',
      redirecTo: '/registro'
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
    {
      icon: 'accessibility',
      name: 'Iniciar Sesion',
      redirecTo: '/login'
    },
    
  ];
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: 'De verdad quieres salir?',
      buttons: [
        {
          text: 'Mejor no...',
          handler: () => {
            
          }
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();

  }

}
