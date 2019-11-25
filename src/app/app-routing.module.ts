import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShipsComponent} from './ships/ships.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ShipsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
