import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TodoListComponent } from  './app/todo-list/todo-list.component';


import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
    // Agrega otros providers según necesites
  ]
}).catch((err) => console.error(err));
bootstrapApplication(TodoListComponent, appConfig)
  .catch((err) => console.error(err));
