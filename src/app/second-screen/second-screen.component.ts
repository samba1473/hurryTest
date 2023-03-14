import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormGroup,Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss']
})
export class SecondScreenComponent {
  constructor(
     private fb: FormBuilder,
     private service:MyserviceService,
     private rout:Router
  ){}   

    hurraySubmit =new FormGroup({
      name : new FormControl('', [Validators.required])
    })

    nameForm(){
      console.log(this.hurraySubmit.value.name);
       this.service.profilename=this.hurraySubmit.value.name;
       this.rout.navigate(['thirdScreen'])
    }
}
