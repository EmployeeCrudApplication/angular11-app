import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 
  employees : Observable<Employee[]>;

  constructor(private employeeService : EmployeeService , private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }
   con:boolean;
  deleteEmployee(uid: string) {
   this.con= confirm("Are you sure?");

   if(this.con){
    this.employeeService.deleteEmployee(uid)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

  deleteConfirm(){
  }

  employeeDetails(uid : string){
    this.router.navigate(['details',uid])
  }
  editEmployee(uid : string){
    this.router.navigate(['update',uid])
  }
  
 
}
