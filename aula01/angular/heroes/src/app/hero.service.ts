import { Injectable } from '@angular/core';
import { HEROES } from './hero/mocks/hero.mocks'
import { Hero } from './hero/Hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() : Hero[] {
    return HEROES
   }
}
