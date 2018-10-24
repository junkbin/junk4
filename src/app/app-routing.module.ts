import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { Comp7Component } from './comp7/comp7.component';
import { Comp8Component } from './comp8/comp8.component';
import { Comp9Component } from './comp9/comp9.component';
import { Comp10Component } from './comp10/comp10.component';
import { Comp11Component } from './comp11/comp11.component';
import { Comp12Component } from './comp12/comp12.component';

const routes: Routes = [
  {path: 'comp1', component: Comp1Component},
  {path: 'comp2', component: Comp2Component},
  {path: 'comp3', component: Comp3Component},
  {path: 'comp4', component: Comp4Component},
  {path: 'comp5', component: Comp5Component},
  {path: 'comp6', component: Comp6Component},
  {path: 'comp7', component: Comp7Component},
  {path: 'comp8', component: Comp8Component},
  {path: 'comp9', component: Comp9Component},
  {path: 'comp10', component: Comp10Component},
  {path: 'comp11', component: Comp11Component},
  {path: 'comp12', component: Comp12Component},
  {path: '', component: Comp9Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }

export const RoutingComponents = [
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp8Component,
    Comp9Component,
    Comp10Component,
    Comp11Component,
    Comp12Component
];
