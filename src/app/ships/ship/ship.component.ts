import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ship} from '../../ship';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {

  @Input()
  ship: Ship;

  @Output()
  shipDeleted = new EventEmitter<Ship>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteShip() {
    this.shipDeleted.emit(this.ship);
  }
}
