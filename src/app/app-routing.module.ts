import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WrapperComponent} from './view/wrapper/wrapper.component';
import {LandingComponent} from './view/landing/landing.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'app',
    component: WrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
