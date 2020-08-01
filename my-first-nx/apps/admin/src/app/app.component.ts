import { Component } from '@angular/core';

@Component({
  selector: 'my-first-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

  constructor (){
    this.xyz();
  }

  abc (){
var a = 10;

  }
  xyz(){
    var a;
console.log(a);
  }
}
