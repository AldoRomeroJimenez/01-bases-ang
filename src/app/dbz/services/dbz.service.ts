import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters:Character[]=[
    {
      id:uuid(),
      name:"Krillin",
      power:100
    },
    {
      id:uuid(),
      name:"Goku",
      power:9999
    }]

    onNewCharacter(character:Character):void{

      this.characters.push(character);
    }
    onDeletedCharacter(id:string):void{
      this.characters = this.characters.filter(character=>character.id != id);
    }
}
