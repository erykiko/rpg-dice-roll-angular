import { Component, Input } from '@angular/core';

@Component({
  selector: 'dice-card',
  templateUrl: './dice-card.component.html',
  styleUrls: ['./dice-card.component.css']
})
export class DiceCardComponent {
  @Input() diceValue: string;
  lastRoll:number;
  rollFunc(){
    let generatedNum: number = (Math.floor(Math.random() * parseInt(this.diceValue)))+1;
    this.lastRoll = generatedNum;
    return generatedNum;
  };
}
