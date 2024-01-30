import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre:string="Batman";
  public edad:  Number =40;
  public ciudad:string ="gotica";

  getDescription():string{

    return `${this.nombre} - ${this.edad} - ${this.ciudad}`;
  }
  changeNombre():void{
    this.nombre = "Robin";
  }
  changeEdad():void{
    this.edad = 17;
  }
  reset():void{
    this.nombre="Batman";
    this.edad=40;
  }
}


