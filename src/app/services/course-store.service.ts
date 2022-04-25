import { Injectable } from '@angular/core';
import { Course } from '../models';
import { InstituteStoreService } from './institute-store.service';

@Injectable({
  providedIn: 'root'
})
export class CourseStoreService {
  private courses: Course[] = [];

  constructor(private srvInstitue: InstituteStoreService) {
    this.populateStore();
  }

  populateStore() {
    let institute = this.srvInstitue.get()[2];

    this.courses.push(new Course().setInstitute(institute).setName("Bachelor of Computer Science (Hons)").setPicture("assets/images/uom.png"));
    this.courses.push(new Course().setInstitute(institute).setName("Bachelor of Business Administration").setPicture("assets/images/course-2.webp"));
    this.courses.push(new Course().setInstitute(institute).setName("Bachelor of Fine Arts").setPicture("assets/images/course-3.png"));
  }

  get() {
    return this.courses;
  }
}
