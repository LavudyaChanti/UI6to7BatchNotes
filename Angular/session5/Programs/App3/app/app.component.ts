import { Component } from '@angular/core';

@Component({
  selector: 'mycomponent1',
  template: `<div>
                  Name:<input type='text'  [(ngModel)]='myname'>  <br>
                  Ur Name:{{myname}}
            </div>`,
  styles: ['div{color:green;border:1px solid red;}'],
})

export class AppComponent 
{
  myname:string='L Chanti';
}
