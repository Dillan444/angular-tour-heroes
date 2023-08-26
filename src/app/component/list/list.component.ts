import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() heroes: Hero[] | null = null
  @Output() chooseHero = new EventEmitter<Hero>();

  onSelect(hero: Hero) {
    this.chooseHero.emit(hero)
  }


}
