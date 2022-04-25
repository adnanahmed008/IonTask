import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models';
import { InstituteStoreService } from 'src/app/services';
import { CourseStoreService } from 'src/app/services/course-store.service';

@Component({
  selector: 'app-best-courses',
  templateUrl: './best-courses.component.html',
  styleUrls: ['./best-courses.component.scss'],
})
export class BestCoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private srcCourses: CourseStoreService) { }

  ngOnInit() {
    this.courses = this.srcCourses.get();
  }

}
