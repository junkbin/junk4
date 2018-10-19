import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { Comp1Component } from './comp1/comp1.component';

const routes: Routes = [
  {path: 'comp1', component: Comp1Component},
  {path: 'comp2', component: Comp2Component},
  {path: '', component: Comp1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [Comp2Component, Comp1Component]
})
export class AppRoutingModule { }

export const RoutingComponents = [
    Comp1Component,
    Comp2Component
];
