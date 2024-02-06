import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Course } from '../model/course';
import { Observable, of } from 'rxjs';
import { CoursesService } from './courses.service';
import { first, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { BlogtopicService } from './blogtopic.service';
import { IBlogTopicContent } from '../model/IBlogTopicContent';

@Injectable()
export class CourseResolver implements Resolve<IBlogTopicContent> {
  constructor(
    private coursesService: CoursesService,
    private blogtopicService: BlogtopicService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IBlogTopicContent> {
    const courseId = route.params['id'];

    //return this.coursesService.findCourseById(courseId).pipe(first());
    return this.blogtopicService.getBlogContent(courseId).pipe(first());
  }
}
