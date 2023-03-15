import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, FormGroup,Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit{
  name=""
  constructor(
    private service:MyserviceService,
    private rout:Router
  ){}
  hurraySubmit = new FormGroup({
    roomName : new FormControl('', [Validators.required]),
  })
  nameForm(){

  }
  sendtoNextPage(){
    this.rout.navigate(['letsBegin'])
    setTimeout(() => {
      this.rout.navigate(['chooseWord'])
    }, 1000);
  }
  ngOnInit(): void {
    this.name=this.service.profilename
  }
}
