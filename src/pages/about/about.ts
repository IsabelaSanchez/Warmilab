import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  nombre: string ="Salome";
  ocupacion: string ="Estudiante";
  edad: number = 16;

datos: any ={
  nombre:" salome Quispe Cardenas",
  ocupacion:" Estudiante de Secundaria",
  edad:16
};
dato2: any ={
origen:"Lima, Perú",
correo:" solamente4toa@hotmail.com",
planeta:"Tierra",


 };
  constructor(public navCtrl: NavController) {

  }

}
