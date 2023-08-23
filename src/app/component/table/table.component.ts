import { Component, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() heroes: Hero[] | null = null
}
