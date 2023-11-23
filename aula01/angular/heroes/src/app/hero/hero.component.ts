import { Component } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
