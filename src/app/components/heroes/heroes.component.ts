import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../services/hero.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  ngOnInit() :void{
    this.getHeroes();
  }
  constructor(private heroService:HeroService){}
  getHeroes():void{
    this.heroes = this.heroService.getHeroes();
  }    



  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  heroes : Hero[] = []
}
