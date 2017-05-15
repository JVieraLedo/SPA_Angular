import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroesService, Hero} from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  showHero(index: number) {
    this._router.navigate(['/hero', index]).catch(function (error) {
      console.error(error);
    });
  }

}
