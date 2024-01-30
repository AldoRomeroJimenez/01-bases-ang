import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()//recibir informacion de otro componente
  public listCharacters:Character[]=[{
    id:uuid(),
    name:"napa",
    power:2000
  }]

  //se va a emitir un numero, no un objeto a diferencia de cuando se recibe el listado

  @Output()
  public onDeletedCharacter:EventEmitter<string>= new EventEmitter();

  onDeleteCharacter(id:string):void{
    this.onDeletedCharacter.emit(id);
  }
}
