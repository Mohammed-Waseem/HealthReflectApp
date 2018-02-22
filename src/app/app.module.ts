import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';











import {MatSidenavModule, MatSidenav, MatSidenavContent, MatSidenavContainer} from '@angular/material/sidenav';
import { GamedescriptionComponent } from './gamedescription/gamedescription.component';
import { NewgameComponent } from './newgame/newgame.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { DataService } from './data.service';
import { FilterPipe } from './filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    GamedescriptionComponent,
    NewgameComponent,
    GamelistComponent,
    FilterPipe
  
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    HttpModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,

    RouterModule.forRoot([
      {path:'gamelist',component:GamelistComponent, pathMatch: 'full' },
      {path:'gamedesc',component:GamedescriptionComponent},
      {path:'newgame',component:NewgameComponent}

    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
