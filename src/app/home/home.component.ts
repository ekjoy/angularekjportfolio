import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { map, tap } from 'rxjs/operators';
import { BlogtopicService } from '../services/blogtopic.service';
import { IBlogTopic } from '../model/IBlogTopic';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //courses$: Observable<Course[]>;
  courses$: Observable<IBlogTopic[]>;

  constructor(
    private coursesService: CoursesService,
    private blogtopicService: BlogtopicService
  ) {}

  ngOnInit() {
    // this.courses$ = this.coursesService.findAllCourses()
    //     .pipe(
    //         map(Object.values)
    // );

    this.courses$ = this.blogtopicService
      .getTopFiveTopic()
      .pipe(map(Object.values));
  }
}
