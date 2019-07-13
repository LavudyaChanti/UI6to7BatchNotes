import { Component } from '@angular/core';

@Component({
  selector: 'mycomponent1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  myname:string = 'L Chanti';
  text1:string="Good Morning";
  text2:string="Good Evening";
  b1:boolean=true;
  isrc1:string='https://cdn.images.express.co.uk/img/dynamic/68/590x/tendulkar-366848.jpg';
  sayHi():void
  {
    alert('Hiiii');
  }
  sayHello():void
  {
    alert('Hello '+this.myname);
  }

  c1:string='red';
}
