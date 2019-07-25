import { Component, OnInit,ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companyname:string='Tallgrass';
  @ViewChild(EmployeeComponent) emp:EmployeeComponent;
  dowork1()
  {
    console.log(this.emp);
    this.emp.empname='Chanti';
  }
  constructor() { }

  ngOnInit() {
  }

}
