import { Component, OnInit } from '@angular/core';
import { StudentProject } from './student-project';

@Component({
  selector: 'app-student-project-list',
  templateUrl: './student-project-list.component.html',
  styleUrls: ['./student-project-list.component.css']
})
export class StudentProjectListComponent implements OnInit {
  studentProjectList: StudentProject[] =[
new StudentProject("Honey", "welln", "honey@email.com", 500),
    new StudentProject("nishi", "rouff", "nishi@email.com", 600)
  ];
  constructor() {
  }

  ngOnInit(): void {
  }


}
