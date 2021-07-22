import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';

import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';


@NgModule({
  // Componentes do módulo
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    CoreModule,
    CourseModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
