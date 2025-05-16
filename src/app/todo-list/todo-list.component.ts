import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',

  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks: string[] = ['vender1', 'Comprar2', 'Ahorrar3'];
  newTask: string = ''; // Almacena el valor del input

  addTask() {
    if (this.newTask.trim()) { // Verifica que no esté vacío
      this.tasks.push(this.newTask.trim()); // Agrega la tarea
      this.newTask = ''; // Limpia el campo de entrada
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1); // Elimina la tarea en el índice especificado
  }
}


      