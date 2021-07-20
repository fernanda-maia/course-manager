import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];
    ngOnInit(): void {
        this.courses= [
            {
                id: 1,
                name: "Introdução ao Angular",
                imageUrl: "/assets/images/angular.svg",
                price: 99.90,
                code: "ANG123",
                duration: 50,
                rating: 4.5,
                releaseDate: "12 de Janeiro 2021"
            },
            {
                id: 2,
                name: "Java Avançado",
                imageUrl: "/assets/images/java.svg",
                price: 125.60,
                code: "JAV123",
                duration: 90,
                rating: 5.0,
                releaseDate: "20 de Setembro 2021"
            },
            {
                id: 3,
                name: "Kotlin - Curso Completo",
                imageUrl: "/assets/images/kotlin.svg",
                price: 100.00,
                code: "KOT123",
                duration: 120,
                rating: 2.0,
                releaseDate: "10 de Novembro 2021"
            }
        ]
    } 

}