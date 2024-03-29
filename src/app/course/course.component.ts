import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
} from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import { Lesson } from '../model/lesson';
import { Meta, Title } from '@angular/platform-browser';
import { IBlogTopicContent } from '../model/IBlogTopicContent';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  //course: Course;
  course: IBlogTopicContent;

  dataSource: MatTableDataSource<Lesson>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    // this.course = this.route.snapshot.data['course'];
    this.course = this.route.snapshot.data['course'];

    this.dataSource = new MatTableDataSource([]);

    // this.coursesService
    //   .findAllCourseLessons(this.course.id)
    //   .subscribe((lessons) => (this.dataSource.data = lessons));

    this.title.setTitle(this.course.description);

    this.meta.updateTag({
      name: 'description',
      content: this.course.title,
    });

    this.meta.updateTag({ name: 'og:image', content: this.course.image });
    this.meta.updateTag({
      name: 'og:description',
      content: this.course.title,
    });
    this.meta.updateTag({ name: 'og:title', content: this.course.title });
  }
}
