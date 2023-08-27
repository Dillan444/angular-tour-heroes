import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  selectedHero: Hero | false = false

  @Input() heroes: Hero[] | null = null
  @Input() setHero(hero: Hero) {
    this.selectedHero = hero
  }
  @Output() chooseHero = new EventEmitter<Hero>();

  onSelect(hero: Hero) {
    this.selectedHero = hero
    this.chooseHero.emit(hero)
  }


}
