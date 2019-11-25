import {Component, EventEmitter, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ShipsService} from '../ships.service';
import {MatDialogRef} from '@angular/material';
import {Ship} from '../../ship';
import {WebcamImage, WebcamInitError} from 'ngx-webcam';

@Component({
  selector: 'app-add-ship',
  templateUrl: './add-ship.component.html',
  styleUrls: ['./add-ship.component.scss']
})
export class AddShipComponent implements OnInit {

  takingPicture = false;
  submitted = false;
  takePictureEmitter = new EventEmitter<void>();
  preview: string = null;

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
      picture: this.preview
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

  handleInitError(error: WebcamInitError) {
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      console.warn('Camera access was not allowed by user!');
    }
  }

  previewPicture() {
    this.takingPicture = true;
  }

  takePicture() {
    this.takePictureEmitter.emit();
  }

  pictureTaken(picture: WebcamImage) {
    console.log('pictureTaken');
    this.preview = picture.imageAsDataUrl;
  }

  clearPicture() {
    this.preview = null;
    this.takingPicture = false;
  }
}
