import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-addcharacter',
  templateUrl: './addcharacter.component.html',
})
export class AddcharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public itemChar : Character = {
    id:uuid(),
    name:"",
    power:0
  }

  publicarCharacter():void{
    this.itemChar.id=uuid();
    console.log(this.itemChar);
    if(this.itemChar.name.length===0)return;
    this.onNewCharacter.emit(this.itemChar);
    this.itemChar = {id:"" , name:"" , power:0};
  }
}
