import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course = new Course();
  @Input() lines: string = "none";

  constructor() { }

  ngOnInit() { }

}
