import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FractalVisualizerComponent } from 'src/app/core/fractal-visualizer/fractal-visualizer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    FractalVisualizerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class HomeModule { }
