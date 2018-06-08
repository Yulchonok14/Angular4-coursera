import {Injectable} from '@angular/core';
import {Promotion} from '../../shared/promotion';
import {PROMOTIONS} from '../../shared/promotions';
import {Observable} from 'rxjs/Rx';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private rectangular: Restangular) {
  }

  getPromotions(): Observable<Promotion[]> {
    /*return new Promise(resolve => {
      setTimeout(() => { resolve(PROMOTIONS); }, 2000);
    });*/
    return this.rectangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.rectangular.one('promotions', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.rectangular.all('promotions').getList({featured: true})
      .map(promotions => promotions[0]);

  }

}
