import { Component } from '@angular/core';
@Component({
  selector: 'my-app',

  template:
   `<div> 
        a={{a}}   <br>
        cube of a={{a|mypipe1}}
    </div>
          `,
  
})
export class AppComponent 
{
  a:number=10;
}
