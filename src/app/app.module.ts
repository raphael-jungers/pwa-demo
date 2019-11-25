import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DBConfig, NgxIndexedDBModule} from 'ngx-indexed-db';
import {ShipComponent} from './ships/ship/ship.component';
import {AddShipComponent} from './ships/add-ship/add-ship.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AboutComponent} from './about/about.component';
import {ShipsComponent} from './ships/ships.component';
import {WebcamModule} from 'ngx-webcam';

const dbConfig: DBConfig = {
  name: 'Store', version: 1, objectStoresMeta: [
    {
      store: 'ships',
      storeConfig: {keyPath: 'id', autoIncrement: true},
      storeSchema: [
        {name: 'name', keypath: 'name', options: {unique: true}},
        {name: 'description', keypath: 'description', options: {unique: false}},
        {name: 'picture', keypath: 'picture', options: {unique: false}}
      ]
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    ShipComponent,
    AddShipComponent,
    AboutComponent,
    ShipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    NgxIndexedDBModule.forRoot(dbConfig),
    WebcamModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [
    AddShipComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
