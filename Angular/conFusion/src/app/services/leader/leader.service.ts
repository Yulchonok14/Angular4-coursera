import { Injectable } from '@angular/core';
import { Leader } from '../../shared/leader';
import { LEADERS } from '../../shared/leaders';
import { Observable } from 'rxjs/Rx';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private rectangular: Restangular) { }

    getLeaders(): Observable<Leader[]> {
      /*return new Promise(resolve => {
        setTimeout(() => { resolve(LEADERS); }, 2000);
      });*/
      return this.rectangular.all('leaders').getList();
    }

    getLeader(id: number): Observable<Leader> {
      return this.rectangular.one('leaders', id).get();
    }

    getFeaturedLeader(): Observable<Leader> {
      return this.rectangular.all('leaders').getList({featured: true})
        .map(leaders => leaders[0]);
    }

}
