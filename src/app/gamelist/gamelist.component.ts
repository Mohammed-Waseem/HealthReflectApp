import { Component, OnInit } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { DataService } from "../data.service";



@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {


  Imagess = [
    {name:'Super Mario',image:'supermariogame.jpg',desc:'Super Mario Run has received some big updates! You control Mario by tapping as he constantly runs forward. You time your taps to pull off stylish jumps, midair spins, and wall jumps to gather coins and reach the goal!',longDesc:'Super Mario Run can be downloaded for free and after you purchase the game, you will be able to play all the modes with no additional payment required. You can try out all four modes before purchase: World Tour, Toad Rally, Remix 10, and Kingdom Builder.■New mode Remix 10Some of the shortest Super Mario Run courses you ll ever play! This mode is Super Mario Run in bite-sized bursts! Youll play through 10 short courses one after the other, with the courses changing each time you play. Daisy is lost somewhere in Remix 10, so try to clear as many courses as you can to find her! ■New World Tour courses A brand-new world of courses, World Star, has been added to World Tour mode! You can play this world after completing the first six worlds. ■World Tour Run and jump with style to rescue Princess Peach from Bowser’s clutches  Travel through plains, caverns, ghost houses, airships, castles, and more. Clear the 24 exciting courses to rescue Princess Peach from Bowser, waiting in his castle at the end. There are many ways to enjoy the courses, such as collecting the 3 different types of colored coins or by competing for the highest score against your friends. You can try courses 1-1 to 1-4 for free. Toad Rally Show off Mario’s stylish moves, compete against your friends, and challenge people from all over the world.'},
    {name: 'Modern Combat 5',image:'ModernCombat.jpg',desc:' Modern Combat 5: Blackout is a 2014 first-person shooter developed by Gameloft Bucharest and published by Gameloft. It is the fifth installment of the Modern Combat series and the sequel to Modern Combat',longDesc:"Step onto the battlefield and answer the call with the title that raised the bar for first person shooter games with its great graphics, high-powered guns and intense online multiplayer action. Create a squad from 9 classes, add your friends for team play and test your skills in dynamic warfare against online rivals from around the world    Prefer to work alone? Then feel free to step into the thrilling solo play campaign as you shoot your way through one dire situation after another to save the world as you launch an attack against a lunatics apocalyptic plans. You wont find more first person shooter fun in a free game anywhere! 9 CLASSES WITH UNIQUE SKILLS > Customize and level up any of the 9 classes across solo play and team play modes.  > Find the playstyle that suits you: Assault, Heavy, Recon, Sniper, Support, Bounty Hunter, Sapper, X1-Morph, or Kommander.> Activate class-specific skills by earning and spending Skill Points"},
    {name: 'Asphalt',image:'Asphalt.jpg',desc:'Asphalt 8 is a 2013 racing video game, developed by Gameloft Barcelona and published by Gameloft as part of the Asphalt series. It was released on August 22, 2013 for iOS and Android, November 13 for Windows 8.1 and Windows Phone 8, January 15, 2014 for BlackBerry 10 and April 5, 2015 for Tizen.',longDesc:''},
    
]
NewGame=[
{name:'Spider Man',image:'spiderman.jpg',price:'free'},
{name:'Brothers in arms',image:'brothers.jpg',price:'piad'},
{name:'Dead Trigger',image:'dead.jpg',price:'free'}

]
 title:any;

  constructor(private router:Router, private data: DataService ) { }

  ngOnInit() {
  }
 
  onSelect(i){
    
    this.title = this.Imagess[i];    
    this.router.navigate(['gamedesc']);
    console.log(this.title);
    this.data.changeMessage(this.title);

  }
  routeNewGame()
  {
    this.router.navigate(['newgame']);
  }


}
