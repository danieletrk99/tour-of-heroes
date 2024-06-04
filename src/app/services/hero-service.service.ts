import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
  constructor(private messageService: MessageService) { }

  getHeroById(id: number) : Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Hero Service: fetched hero id=${hero.id}`);
    return of(hero);
  }
}
