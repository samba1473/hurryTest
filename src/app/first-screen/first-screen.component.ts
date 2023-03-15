import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent  implements OnInit{
  name=""
  constructor(
    private rout:Router,
    private service:MyserviceService
  ){}
  ngOnInit(): void {
   this.name= this.service.profilename
  }
}
