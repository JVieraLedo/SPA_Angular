import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService, Hero} from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  showHeroes: boolean = true;
  text: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.text = params['text'];
      this.heroes = this._heroesService.searchHeroes(this.text);
      this.showHeroes = this.heroes.length > 0;
    });
  }

  showHero(index: number) {
    this._router.navigate(['/hero', index]).catch(function (error) {
      console.error(error);
    });
  }

}
