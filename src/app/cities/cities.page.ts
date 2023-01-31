import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.page.html',
  styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {

  cities: any = []
  token = localStorage.getItem("token")

  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.log(this.token);
    localStorage.removeItem("token")
    //localStorage.clear() Con esto se borra todo el localStorage
    this.getCities().subscribe(res => {
      this.cities = res;
    })
  }

  getCities() {
    return this.http
      .get("assets/files/cities.json")
      .pipe(
        map((res: any) => { return res.data })
      )
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      message: 'Ciudad seleccionada',
      duration: 2000,
      position: "bottom"
    })
    toast.present()
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Estás seguro que deseas borrar la ciudad?",
      buttons: ["Borrar"],
    })
    await alert.present()
    let result = await alert.onDidDismiss()
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: "Borrar ciudad",
      message: "¿Estás seguro que deseas borrar la ciudad?",
      buttons: [{
        text: "No",
        handler: () => {
          console.log("No se cancelo");
        }
      }, {
        text: "Si",
        handler: () => {
          console.log("Ciudad eliminada");

        }
      }],
    })
    await alert.present()
    let result = await alert.onDidDismiss()
  }
}
