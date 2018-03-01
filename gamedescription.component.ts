import { Component, OnInit,Input } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {RouterModule, Router} from '@angular/router';
import {GamelistComponent} from '../gamelist/gamelist.component';
import { DataService } from "../data.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-gamedescription',
  templateUrl: './gamedescription.component.html',
  styleUrls: ['./gamedescription.component.css'],
  animations: [

    trigger('listAnimat', [
            
      transition('void => *', [
          animate(600, keyframes([
              style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
              style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
              style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
      ])

  ]),
    trigger('focusPanel', [
      transition('void => *', [
        animate(2000, keyframes([
            style({opacity: 0, transform: 'translateX(-100px)', offset: 0}),
            style({opacity: 1, transform: 'translateX(45px)', offset: .75}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1}),
        ]))
    ])
  ])
  ]
})
export class GamedescriptionComponent implements OnInit {
 
  state:string='inactive';
  message:any;
  constructor( private router:Router, private data:DataService) { }

  
  ngOnInit() {

        this.data.currentMessage.subscribe(message => this.message = message)

        console.log('waseem');

  }
  
}
