import { Component } from "@angular/core";
@Component(
  {
    selector: 'counter-app',
    templateUrl: 'counter.component.html'
  }
)
export class CounterComponent{

  public title: string  = 'mis putas bases';
  public conter:number=1;
  incrementar(){
    this.conter+=1;
  }
  disminuir(){
    this.conter-=1;
  }
}
