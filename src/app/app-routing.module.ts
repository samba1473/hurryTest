import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseWordComponent } from './choose-word/choose-word.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ForthScreenComponent } from './forth-screen/forth-screen.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { LetsBeginComponent } from './lets-begin/lets-begin.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';

const routes: Routes = [
  {path:'fistScreen', component:FirstScreenComponent},
  {path:'secondScreen', component:SecondScreenComponent},
  {path:'thirdScreen', component:ThirdScreenComponent},
  {path:'forthScreen', component:ForthScreenComponent},
  {path:'createRoom', component:CreateRoomComponent},
  {path:'joinRoom', component:JoinRoomComponent},
  {path:'letsBegin', component:LetsBeginComponent},
  {path:'chooseWord', component:ChooseWordComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
