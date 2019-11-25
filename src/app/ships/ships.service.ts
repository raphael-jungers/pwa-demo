import {Injectable} from '@angular/core';
import {NgxIndexedDBService} from 'ngx-indexed-db';
import {Ship} from '../ship';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private db: NgxIndexedDBService) {
    db.currentStore = 'ships';
  }

  saveShip(ship: Ship): Promise<number> {
    console.log(ship);
    return this.db.add({
      name: ship.name,
      description: ship.description
    });
  }

  getShips(): Promise<Ship[]> {
    return this.db.getAll<Ship>();
  }

  deleteShip(id: number): Promise<void> {
    return this.db.delete(id);
  }
}
