import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
@Component({
  selector: 'app-forth-screen',
  templateUrl: './forth-screen.component.html',
  styleUrls: ['./forth-screen.component.scss']
})
export class ForthScreenComponent implements OnInit{
  name=""
  constructor(
    private service:MyserviceService,
    private rout:Router
  ){}

  createRoom(){
    this.rout.navigate(['createRoom'])
  }

  joinRoom(){
    this.rout.navigate(['joinRoom'])
  }

  ngOnInit(): void {
    this.name=this.service.profilename
  }
}
