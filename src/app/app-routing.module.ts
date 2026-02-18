import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'countries', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}