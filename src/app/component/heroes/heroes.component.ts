import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HEROES } from 'src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  name = ''

  heroes: Hero[] = HEROES
}
