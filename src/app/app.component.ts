import { Component } from '@angular/core';
import { RouterModule,Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router){
    router.navigate(['gamelist']);
}

onHome(){
  this.router.navigate(['gamelist']);
}
goTo(location: string): void {
  window.location.hash = '';
  window.location.hash = location;
}
}
