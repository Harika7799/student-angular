import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectListComponent } from './student-project-list.component';

describe('StudentProjectListComponent', () => {
  let component: StudentProjectListComponent;
  let fixture: ComponentFixture<StudentProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
