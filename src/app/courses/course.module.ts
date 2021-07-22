import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { CourseRegisterComponent } from "./course-register.component";

import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { StarModule } from "../shared/component/star/star.module";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        CourseRegisterComponent
    ],

    imports: [
        AppPipeModule,
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses',
                component: CourseListComponent
              },
              {
                path: 'courses/info/:id',
                component: CourseInfoComponent
              },
              {
                  path: 'register',
                  component: CourseRegisterComponent
              }
        ])
    ]
})
export class CourseModule {

}