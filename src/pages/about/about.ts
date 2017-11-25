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
  nombre:" Salome Quispe Cardenas",
  ocupacion:" Estudiante de Secundaria",
  edad:16
};

informacion: any[]=[
  {
    titulo:"Origen",
    dato:"Lima Peru",
    icono:"flag"
  },
    {
      titulo:"Planeta",
      dato :"Tierra",
      icono: "planet"
    },
      {
      titulo:"email",
      dato: "solamenet4toa@hotmail.com",
      icono:"mail"
    }
];



  constructor(public navCtrl: NavController) {

  }

}
