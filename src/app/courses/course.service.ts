import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    retrieveAll(): Course[] {
        return courses;
    }

    retrieveById(id: number): Course {
        return courses.find((iterator: Course) => iterator.id === id)!;
    }

    save(course: Course): void {
        if(course.id) {
            const index = courses.findIndex((iterator: Course) => iterator.id === course.id);
            courses[index] = {...course};
        }
    }
}


let courses: Course[] = [
    {
        id: 1,
        name: "Introdução ao Angular",
        imageUrl: "/assets/images/angular.svg",
        price: 99.90,
        code: "ANG123",
        duration: 50,
        rating: 4.5,
        releaseDate: "01/12/2021"
    },
    {
        id: 2,
        name: "Java Avançado",
        imageUrl: "/assets/images/java.svg",
        price: 125.60,
        code: "JAV123",
        duration: 90,
        rating: 5.0,
        releaseDate: "08/20/2021"
    },
    {
        id: 3,
        name: "Kotlin - Curso Completo",
        imageUrl: "/assets/images/kotlin.svg",
        price: 100.00,
        code: "KOT123",
        duration: 120,
        rating: 3.5,
        releaseDate: "10/10/2021"
    },
    {
        id: 4,
        name: "PostgreSQL na prática",
        imageUrl: "/assets/images/postgresql.svg",
        price: 75.90,
        code: "POS123",
        duration: 90,
        rating: 3.5,
        releaseDate: "03/06/2021"
    },
    {
        id: 5,
        name: "Python para web",
        imageUrl: "/assets/images/python.svg",
        price: 180.00,
        code: "PYT123",
        duration: 210,
        rating: 5.0,
        releaseDate: "12/03/2021"
    }
]