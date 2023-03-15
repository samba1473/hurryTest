import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, FormGroup,Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-join-room',
  templateUrl: './join-room.component.html',
  styleUrls: ['./join-room.component.scss']
})
export class JoinRoomComponent implements OnInit{
  name=""
  constructor(
    private service:MyserviceService,
    private rout:Router
  ){}
  hurraySubmit=new FormGroup({
    roomName : new FormControl('', [Validators.required]),
    noofPlayers : new FormControl('', [Validators.required])
  })
  sendtoNextPage(){
    this.rout.navigate(['letsBegin'])
    setTimeout(() => {
      this.rout.navigate(['chooseWord'])      
    }, 2000);
  }
  nameForm(){
    
  }
  ngOnInit(): void {
    this.name=this.service.profilename    
  }
}
