import { Component,OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss']
})
export class ThirdScreenComponent implements OnInit {
  name=""
  constructor(
    private service:MyserviceService
  ){}

ngOnInit(){
  this.name=this.service.profilename
}
}
