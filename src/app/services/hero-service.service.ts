import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  getHeroes(): Hero[] {
    return HEROES;
  }
  constructor() { }
}
