import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ShipsService} from '../ships.service';
import {MatDialogRef} from '@angular/material';
import {Ship} from '../../ship';

@Component({
  selector: 'app-add-ship',
  templateUrl: './add-ship.component.html',
  styleUrls: ['./add-ship.component.scss']
})
export class AddShipComponent implements OnInit {

  submitted = false;

  constructor(
    private dialogRef: MatDialogRef<AddShipComponent>,
    private shipsService: ShipsService
  ) {
  }

  ngOnInit() {
  }

  onSubmit(addShipForm: NgForm) {

    console.log(addShipForm.valid);
    console.log(addShipForm.value);

    this.submitted = true;

    const ship: Ship = {
      id: null,
      name: addShipForm.value.name,
      description: addShipForm.value.description,
      picture: null
    };

    if (addShipForm.valid) {
      this.shipsService.saveShip(ship).then(id => {
        console.log(id);
        ship.id = id;
        return this.dialogRef.close(ship);
      }, error => {
        console.log(error);
        addShipForm.reset();
        this.submitted = false;
      });
    }
  }
}
