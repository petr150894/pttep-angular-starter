import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routingPaths } from './core/constants/routingPaths.const';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  { 
    path: routingPaths.home, 
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
