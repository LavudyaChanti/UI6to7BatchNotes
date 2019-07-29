import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  myForm: FormGroup;
 constructor(private fb: FormBuilder) { }

  ngOnInit() 
  {
   this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],

      });

  }
onSubmit(): void 
{
  console.log(this.myForm.value);
}



}
