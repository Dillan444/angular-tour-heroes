import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() hero: Hero | null = null
  @Output() sendHero = new EventEmitter<Hero>()

  chooseHero(hero: Hero) {
    this.sendHero.emit(hero)
  }

  showHeroDetails(hero: Hero) {
    console.log(hero)
  }
}
