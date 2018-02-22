import { Component, OnInit,Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {FilterPipe} from'../filter.pipe';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css'],
})
export class NewgameComponent implements OnInit {
  prices:any;
  NewGame=[
    {name:'Spider Man',image:'spiderman.jpg',price:'free'},
    {name:'Brothers in arms',image:'brothers.jpg',price:'piad'},
    {name:'Dead Trigger',image:'dead.jpg',price:'free'},
    {name:'Need For Spped',image:'need.jpg',price:'free'},
    {name:'UFC Sports',image:'ufc.jpg',price:'free'},
    {name:'Gun Ship',image:'gunship.jpg',price:'paid'},
    {name:'nova',image:'nova.jpg',price:'free'},
    {name:'Shadow Fight',image:'shadow.jpg',price:'free'},
    {name:'Sniper 3D',image:'sniper.jpg',price:'free'},
    {name:'Call Of Duty',image:'call.jpg',price:'paid'}






    
    ]
  constructor() { }

  ngOnInit() {
  }

}
