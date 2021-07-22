import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";


@Component({
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-list.component.css',
                './course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private route: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
        let id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.courseService.retrieveById(id).subscribe({
            next: course => this.course = course,
            error: err => console.error("ERROR: ", err)
        });
    }

    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => alert('Course saved!'),
            error: err => console.error("ERROR: ", err)
        });
    }

}