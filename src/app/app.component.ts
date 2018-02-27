import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListConfig } from './card-toolbar/list.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maaz';

  buttonLabel = 'Click';

  sqList: any;

  constructor(private router: Router) {

    this.sqList = [{
      name: 'Maaz',
      clickHandler: ($event, listItem) => {
        console.log(listItem + ' clicked');
      }
    },
    {
      name: 'Hana',
      clickHandler: ($event, listItem) => {
        console.log(listItem + ' clicked');
      }
    },
    {
      name: 'Mouviz',
      // clickHandler: ($event, listItem) => {
      //   console.log(listItem + ' clicked');
      // }
      path: '/dummy'
    }
    ];
  }

  onButtonClick() {
    console.log(`${this.buttonLabel} clicked`);
    this.router.navigate(['/dummy']);
  }
}
