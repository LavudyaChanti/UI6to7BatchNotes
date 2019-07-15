import { Component } from '@angular/core';

@Component({
  selector: 'mycomponent1',
  template: `<div>
                  Hello Chanti                              <hr>
                  <p [style.color]='c1'>Good Morning</p>  <hr>
                  <p [class]='c2'>Good Afternoon</p>    <hr>
                  <p [ngClass]='c2'>Good Evening</p>    <hr>
                  <span [ngStyle]='mystyles1()'>        
                      Good Night
                  </span>
            </div>`,
  styles: ['div{color:green;border:1px solid red;}'],
})

export class AppComponent 
{
  c1:string='aqua';
  c2:string='s1 s2 s3';
  mystyles1()
  {
    return {'color':'yellow','background-color':'blue'};
  }
}
