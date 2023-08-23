import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  @Input() hero: Hero | null = null
}
