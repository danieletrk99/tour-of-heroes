import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../services/hero.service';
import { OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  ngOnInit() : void {
    this.getHeroes();
  };

  constructor(
    private heroService : HeroService,
    private messageService: MessageService
  ){}

  getHeroes() : void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`Heroes Component: Selected hero id=${hero.id}, name=${hero.name}`)
  }

  heroes : Hero[] = [];
}
