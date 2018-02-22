import { Component, OnInit,Input } from '@angular/core';
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
})
export class GamedescriptionComponent implements OnInit {

  message:any;
  constructor( private router:Router, private data:DataService) { }

  
  ngOnInit() {

        this.data.currentMessage.subscribe(message => this.message = message)

        console.log('waseem');

  }
  
}
