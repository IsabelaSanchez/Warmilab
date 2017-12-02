import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  nombre: string ="Isabela";
  ocupacion: string ="Estudiante";
  edad: number = 15;

datos: any ={
  nombre:" Isabela Sanchez",
  ocupacion:" ¡Vivan los hamsters!",
  edad:15
};

informacion: any[]=[
  {
    titulo:"Origen",
    dato:"Lima, Peru",
    icono:"flag"
  },
    {
      titulo:"Habitad Natural",
      dato :"Colegio",
      icono: "planet"
    },
      {
      titulo:"email",
      dato: "natyst_26@hotmail.com",
      icono:"mail"
    },
    {
      titulo: "Hobbie",
      dato: "Crear música 8 días a la semana",
      icono: "alarm"

    },
    {
      titulo: "Música",
      dato: "La banda del sargento pimienta",
      icono:"bug"

    }

  ];


  constructor(public navCtrl: NavController) {
  }
 ngOnInit(){
   this.agregarDato("Religion","Hare Krishna","heart");
   this.agregarDato ("Colegio","Innova Schools","happy");


   }


  agregarDato(nuevotitulo: string, nuevodato: string, nuevoicono: string) {
    this.informacion.push ({
      titulo: nuevotitulo,
      dato: nuevodato,
      icono: nuevoicono,
    });
  }

}
