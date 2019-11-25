import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddShipComponent} from './add-ship/add-ship.component';
import {Ship} from '../ship';
import {ShipsService} from './ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  ships: Ship[] = null;

  constructor(
    private shipsService: ShipsService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loadShips();
  }

  addShip(): void {
    const dialogRef = this.dialog.open(AddShipComponent, {width: '80%', maxWidth: 960});
    dialogRef.afterClosed().subscribe((newShip) => {
      console.log('addShip dialog closed');
      this.ships.push(newShip);
    });
  }

  deleteShip(ship: Ship) {
    console.log(ship);
    this.shipsService.deleteShip(ship.id).then(() => this.loadShips());
  }

  private loadShips(): void {
    this.shipsService.getShips().then(result => this.ships = result);
  }
}
