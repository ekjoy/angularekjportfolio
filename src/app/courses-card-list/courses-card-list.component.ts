import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from '../model/course';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { IBlogTopic } from '../model/IBlogTopic';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent implements OnInit {
  // @Input()
  // courses: Course[];

  @Input()
  courses: IBlogTopic[];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  // editCourse({description, longDescription, category}:Course) {

  //     const dialogConfig = new MatDialogConfig();

  //     dialogConfig.disableClose = true;
  //     dialogConfig.autoFocus = true;

  //     dialogConfig.data = {
  //         description, longDescription, category
  //     };

  //     const dialogRef = this.dialog.open(CourseDialogComponent,
  //         dialogConfig);

  //     dialogRef.afterClosed().subscribe(
  //         val => console.log("Dialog output:", val)
  //     );

  // }
}
