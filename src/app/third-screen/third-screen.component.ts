import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {FormControl, FormGroupDirective, NgForm, FormGroup,Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss']
})
export class ThirdScreenComponent implements OnInit {
  imageblurClass=false;
  name=""
  constructor(
    private service:MyserviceService,
    private rout:Router

  ){}
  
pickID(element:any){
  this.imageblurClass=true 
 
}
navigateForth(){
  this.rout.navigate(['forthScreen'])
}
ngOnInit(){
  this.name=this.service.profilename
}
}
