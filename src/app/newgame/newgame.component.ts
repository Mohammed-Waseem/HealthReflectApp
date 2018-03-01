import { Component, OnInit,Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,group,state } from '@angular/animations';
import {FilterPipe} from'../filter.pipe';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css'],
  animations: [
    trigger('newList', [
        transition('* => *', [
  
          query(':enter', style({ opacity: 0 }), {optional: true}),
  
          query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
              style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
            ]))]), {optional: true})
        ])
      ]),
      trigger('searchList', [
        transition('void => *', [
          animate(1500, keyframes([
              style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
              style({opacity: .5, transform: 'translateY(25px)', offset: .75}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
      ])
    ])
  ]
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
