import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor( private EmployeeService: EmployeeService) {}

  ngOnInit(): void {
  }


  employee: Employee = new Employee();

  submitted = false;

  currentval1: string = "";
  currentval2: string = "";
  currentval3: string = "";
  booleanVar: boolean;

  newEmployee() : void{
    this.employee = new Employee();
    this.submitted = false;
  }

  getVal(val1 ,val2,val3) {
    this.currentval1 = val1;
    this.currentval2 = val2;
    this.currentval3 = val3;
  }
  
  getButtonStatus() {
    if (this.currentval1 != "" && this.currentval2 != "" && this.currentval3 != "" ) {
      this.booleanVar = false;
      return false;
    }
    else {
      this.booleanVar = true;
      return true;
    }
  }

  save(){
    this.EmployeeService
    .createEmployee(this.employee).subscribe((data) =>{
      console.log(data);
      this.employee = new Employee();
    },
    (error) =>console.log(error));
    this.submitted = true;

    
  }
}
