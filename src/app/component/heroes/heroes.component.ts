import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  name = ''

  hero: Hero = {
    id: 1,
    name: 'Super Man',
    gender: 'Hombre',
    height: 1.90,
    weight: 94,
    powers: ['Fuerza', 'Volar', 'Velocidad', 'Visión calorica', 'Visión de rayos X'],
    weakness: 'Criptonita',
    weapons: null,
    image: 'https://www.cinemascomics.com/wp-content/uploads/2023/08/Superman-Legacy.jpg'
  }
}
