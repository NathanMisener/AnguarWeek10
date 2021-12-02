import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: Array<User> = [{firstName:"fred",email:"fred@yahoo.ca",age:35, language:"english", active:true, wage: "step1"},{firstName:"Bob",email:"BOB@yahoo.ca",age:65, language:"French", active:false, wage: "step5"}]

 
  constructor() { }

  ngOnInit(): void {
  }

}
class User {
  firstName: string = "";
  email: string = "";
  age: number = 0;
  language: string = "";
  active: boolean = false;
  wage: string = ""
  // constructor(a: string, b:string, c:number, d: string, e: boolean){
  //   this.firstName=a;
  //   this.email = b;
  //   this.age = c;
  //   this.language = d;
  //   this.active=e;
  // }
}