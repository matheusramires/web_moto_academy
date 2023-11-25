import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mocks/hero.mocks'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero[] = []
  selectedHero?: Hero;
  
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelectHero(hero: Hero){
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.hero = this.heroService.getHeroes();
  }
}

