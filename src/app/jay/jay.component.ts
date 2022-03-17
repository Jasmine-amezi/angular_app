import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jay',
  templateUrl: './jay.component.html',
  styleUrls: ['./jay.component.css']
})
export class JayComponent implements OnInit {

  employees = [
    {
      name:"Henry",
      employeeId: "1000",
      employeeRole: "Software Engineer",
      projectLead: "Natalia",
      cohort: "TLC4"
    },
    {
      name:"Desmond",
      employeeId: "1001",
      employeeRole: "Network Assistant",
      projectLead: "Lekan",
      cohort: "TLC2"
    },
    {
      name:"Jasmine",
      employeeId: "1002",
      employeeRole: "Software Engineer",
      projectLead: "Jasmine",
      cohort: "TLC4"
    },
    {
      name:"Vittoria",
      employeeId: "1003",
      employeeRole: "Office Manager",
      projectLead: "Stoirm",
      cohort: "TLC3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
