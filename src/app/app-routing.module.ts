import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';

const routes: Routes = [
  {path:'fistScreen', component:FirstScreenComponent},
  {path:'secondScreen', component:SecondScreenComponent},
  {path:'thirdScreen', component:ThirdScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
