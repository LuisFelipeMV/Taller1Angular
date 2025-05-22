import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// TypeScript
// todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormControl, Validators } from '@angular/forms';


// Angular Material imports CORRECTOS
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    RouterOutlet , FormsModule, CommonModule ,
  ],
  templateUrl: './app.component.html',
  template: `
  <p>
    todo-list works!
  </p>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Taller2-Tareas Pendientes -lmiranda-app'+'Terminado ' ;
  todos: Todo[] = [];
  newTodoControl = new FormControl('', Validators.required);

  constructor(private todoService: TodoService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
      error: (error) => {
        console.error('Error al cargar las tareas:', error);
        this.snackBar.open('Error al cargar las tareas', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }

  addTodo(): void {
    if (this.newTodoControl.valid) {
      const newTodo: Todo = {
        title: this.newTodoControl.value!,
        completed: false,
      };
      this.todoService.addTodo(newTodo).subscribe({
        next: (addedTodo) => {
          this.todos.push(addedTodo);
          this.newTodoControl.reset();
          this.snackBar.open('Tarea agregada correctamente', 'Cerrar', {
            duration: 2000,
          });
        },
        error: (error) => {
          console.error('Error al agregar la tarea:', error);
          this.snackBar.open('Error al agregar la tarea', 'Cerrar', {
            duration: 3000,
          });
        },
      });
    }
  }
}

