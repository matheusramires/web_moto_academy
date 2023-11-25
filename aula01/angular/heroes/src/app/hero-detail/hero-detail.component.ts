import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero/Hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
 

  @Input() hero? : Hero
  
  ngOnInit(): void{
    this.getHeroes()
  }

    onSelectHero(hero: Hero){
      this.SelectHero = hero;
    }

}
