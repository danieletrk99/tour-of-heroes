import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { HeroServiceService } from '../../services/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})


export class HeroesComponent {
  ngOnInit() : void {
    this.getHeroes();
  }

  constructor(private heroService : HeroServiceService){}

  getHeroes() : void{
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  heroes : Hero[] = [];
}
