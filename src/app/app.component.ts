import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'hurryTest';
  constructor(
    private rout:Router
  ){}
  ngOnInit(){
    this.rout.navigate(['fistScreen']);
    setTimeout(()=>{
      this.rout.navigate(['secondScreen'])
    },2000)
  }
}
