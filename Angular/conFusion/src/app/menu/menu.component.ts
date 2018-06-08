import {Component, Inject, OnInit} from '@angular/core';
import { DishService } from '../services/dish/dish.service';
import {Dish} from '../shared/dish';
import {flyInOut, expand} from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

    dishes: Dish[];
    errMess: string;

  constructor(private dishService: DishService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
      this.dishService.getDishes()
        .subscribe(dishes => this.dishes = dishes,
          errmess => this.errMess = <any>errmess);
  }

}
