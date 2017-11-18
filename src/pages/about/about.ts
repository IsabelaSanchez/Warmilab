import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  nombre: string = "Isabela Sanchez";
  ocupacion: string = "Student";
  edad: number = "15";

  datos: any = {
    nombre: "Isabela Sanchez",
    ocupacion: "Student",
    edad: 15

  };

  grupo: any = {
    origen: "Lima,Peru",
    email: "natyst_26@hotmail.com",
    telefono: "9876542"

  }

  };

  constructor(public navCtrl: NavController) {

  }

}
