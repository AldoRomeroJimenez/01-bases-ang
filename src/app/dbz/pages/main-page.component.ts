import { Character } from '../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component } from '@angular/core';


@Component({
  selector: 'main-page-dbz',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent{
  constructor(private dbzService:DbzService){}

  getCharacters():Character[]{
    return this.dbzService.characters;
  }
  removeCharacter(id:string):void{
    this.dbzService.onDeletedCharacter(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character);
  }
}

