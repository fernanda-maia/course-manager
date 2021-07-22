import { Component } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-register.component.html',
    styleUrls: ['./course-list.component.css',
                './course-info.component.css']
})
export class CourseRegisterComponent {

    course: Course = new Course();

    constructor(private courseService: CourseService) {

    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => alert("Course created!"),
            error: err => console.error("ERROR: ", err)
        });

        this.course = new Course();
    }

}