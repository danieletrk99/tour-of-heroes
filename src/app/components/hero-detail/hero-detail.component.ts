import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from '../../services/hero-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})


export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroServiceService,
    private location: Location
  ){}

  ngOnInit() : void {
    this.getHero();
  }

  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back();
  }
}
