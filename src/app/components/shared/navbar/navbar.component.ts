import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  searchHero(text: string) {
    this.router.navigate( [ '/search', text]).catch(function (request) {
      console.log(request);
    });
  }
}
