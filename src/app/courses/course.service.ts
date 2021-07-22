import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private baseURL: string = 'https://nanda-node-server.herokuapp.com/api/courses';

    constructor(private httpClient: HttpClient) {

    }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.baseURL);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
    }

    save(course: Course): Observable<Course> {
        let observable: Observable<Course>;

        if(course.id) {
            observable = this.httpClient.put<Course>(`${this.baseURL}/${course.id}`, course)!
            
        } else {
            observable = this.httpClient.post<Course>(`${this.baseURL}`, course)!

        }

        return observable;
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseURL}/${id}`);
    }
}