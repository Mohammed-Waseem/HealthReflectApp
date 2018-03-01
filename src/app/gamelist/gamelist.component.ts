import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,group,state } from '@angular/animations';

import {RouterModule, Router} from '@angular/router';
import { DataService } from "../data.service";



@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css'],
  animations: [

    trigger('listAnimation', [
        state('in', style({width: 100, transform: 'translateX(0)', opacity: 1})),
        transition('void => *', [
          style({width: 10, transform: 'translateY(50px)', opacity: 0}),
          group([
            animate('0.9s 0.2s ease', style({
              transform: 'translateY(0)',
              width: '100%'
            })),
            animate('0.9s ease', style({
              opacity: 1
            }))
          ])
        ])
      ]),
      trigger('listNewGame', [
        transition('* => *', [
  
          query(':enter', style({ opacity: 0 }), {optional: true}),
  
          query(':enter', stagger('300ms', [
            animate('2s ease-in', keyframes([
              style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
            ]))]), {optional: true})
        ])
      ])


  ]
})
export class GamelistComponent implements OnInit {


  Imagess = [
    {name:'Super Mario',image:'supermariogame.jpg',desc:'Super Mario Run has received some big updates! You control Mario by tapping as he constantly runs forward. You time your taps to pull off stylish jumps, midair spins, and wall jumps to gather coins and reach the goal!',longDesc:'Super Mario Run can be downloaded for free and after you purchase the game, you will be able to play all the modes with no additional payment required. You can try out all four modes before purchase: World Tour, Toad Rally, Remix 10, and Kingdom Builder.■New mode Remix 10Some of the shortest Super Mario Run courses you ll ever play! This mode is Super Mario Run in bite-sized bursts! Youll play through 10 short courses one after the other, with the courses changing each time you play. Daisy is lost somewhere in Remix 10, so try to clear as many courses as you can to find her! ■New World Tour courses A brand-new world of courses, World Star, has been added to World Tour mode! You can play this world after completing the first six worlds. ■World Tour Run and jump with style to rescue Princess Peach from Bowser’s clutches  Travel through plains, caverns, ghost houses, airships, castles, and more. Clear the 24 exciting courses to rescue Princess Peach from Bowser, waiting in his castle at the end. There are many ways to enjoy the courses, such as collecting the 3 different types of colored coins or by competing for the highest score against your friends. You can try courses 1-1 to 1-4 for free. Toad Rally Show off Mario’s stylish moves, compete against your friends, and challenge people from all over the world.'},
    {name:'Modern Combat',image:'ModernCombat.jpg',desc:' Modern Combat 5: Blackout is a 2014 first-person shooter developed by Gameloft Bucharest and published by Gameloft. It is the fifth installment of the Modern Combat series and the sequel to Modern Combat',longDesc:"Step onto the battlefield and answer the call with the title that raised the bar for first person shooter games with its great graphics, high-powered guns and intense online multiplayer action. Create a squad from 9 classes, add your friends for team play and test your skills in dynamic warfare against online rivals from around the world    Prefer to work alone? Then feel free to step into the thrilling solo play campaign as you shoot your way through one dire situation after another to save the world as you launch an attack against a lunatics apocalyptic plans. You wont find more first person shooter fun in a free game anywhere! 9 CLASSES WITH UNIQUE SKILLS > Customize and level up any of the 9 classes across solo play and team play modes.  > Find the playstyle that suits you: Assault, Heavy, Recon, Sniper, Support, Bounty Hunter, Sapper, X1-Morph, or Kommander.> Activate class-specific skills by earning and spending Skill Points"},
    {name: 'Asphalt',image:'Asphalt.jpg',desc:'Asphalt 8 is a 2013 racing video game, developed by Gameloft Barcelona and published by Gameloft as part of the Asphalt series. It was released on August 22, 2013 for iOS and Android, November 13 for Windows 8.1 and Windows Phone 8, January 15, 2014 for BlackBerry 10 and April 5, 2015 for Tizen.',longDesc:'REAL LUXURY DREAM CARS & MOTORCYCLES!• Over 190 high-performance cars & bikes to drive & push beyond their limits• Top licensed manufacturers & models: the Lamborghini Veneno, Bugatti 16.4 Grand Sport Vitesse, Ferrari LaFerrari, McLaren P1, Porsche 911 GT3 RS, Ducati Monster 1200 & more, including a selection of racing motorbikes • Newly recorded high-fidelity motor sounds for realistic audio immersion • Customize & upgrade your rides with over 2,300 decals to take down opponents with style!GET AIRBORNE WITH ASPHALT 8 • Hit the ramps & take the race beyond the limits of physics, breaking free from gravity into the sky with a car or bike!• Perform barrel rolls & wild 360º jumps to soar past your opponents.• Maneuver through the air, pulling off insane stunts in your car or motorcycle to maximize your speed & find a fast route to the goal.EXOTIC NEW LOCATIONs • Over 40 high-speed tracks in 16 different settings, such as Venice, French Guiana, Iceland, the Nevada Desert & other exciting locations to ride your car or bike across• Race any track you want in original mode or its mirror variation to ensure a fresh challenge in Career mode that’s sure to keep you on your toes • Discover plenty of shortcuts hidden throughout every location. Mastering them is sure to raise your game to the top of the competition! AN ENDLESS STREAM OF CONTENT FOR SPEED FREAKS!• 9 seasons & over 400 events in Career mode, with plenty of challenges for even the most experienced car & motorcycle riders. • Stunning visuals thanks to next-gen shaders, real-time geometry reflection & other amazing HD effects. • Check out the Infected & Gate Drift modes for a fresh twist on racing.• Win top prizes in the Limited-Time Cups, including early access to some of the latest cars in the game!'},
    
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
    this.data.changeMessage(this.title);
    window.location.hash = '';
    window.location.hash = 'destination';

  }
  routeNewGame()
  {
    this.router.navigate(['newgame']);
    window.location.hash = '';
  window.location.hash = 'destination';
  }


}
