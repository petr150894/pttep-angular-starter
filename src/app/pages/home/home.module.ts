import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    HomeComponent,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
  ],
})
export class HomeModule { }
