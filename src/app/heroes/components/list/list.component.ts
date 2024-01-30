import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesdelsilencio:string[]=["Batman","Superman","Aquaman","Birdman","Flash","TuPutaMadre"];
  public heroe?:string;


  quitarUltimo():void{

    this.heroe = this.heroesdelsilencio.pop();

  }
}
