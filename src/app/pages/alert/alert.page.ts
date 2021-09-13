import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Respuesta:',
      
      message: 'Peticion recibida, En breve nos contactaremos contigo!',
      buttons: ['Ok, Gracias.']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  //alert con input de datos 
  
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos de Contacto',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre Completo'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: '',
          placeholder: 'Correo Electronico'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Razon'
        },
        {
          name: 'name3',
          value: '',
          type: 'url',
          placeholder: 'URL Adjunta(Opcional)'
        },
        // input date with min & max
        
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        
        
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
        
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }


}
