import { Component, OnInit } from "@angular/core";

import { Course } from "./course";
import { CourseService } from "./course.service";


@Component({
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

    _filterBy: string = "";
    _courses: Course[] = [];

    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.retrieveAll();
    } 
    
    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.error('ERROR: ', err)
        });

    }

    deleteById(id: number): void {
        this.courseService.deleteById(id).subscribe({
            next: _ => {
                this.retrieveAll();
            },
            error: err => console.error("ERROR: ", err)
        });
    }

    set filter(value: string) {
        this._filterBy = value;
        
        this.filteredCourses = this._courses.filter((course: Course) => 
        course.name.toLowerCase()
        .indexOf(this._filterBy.toLowerCase()) > -1)
    }

    get filter() {
        return this._filterBy;
    }

}