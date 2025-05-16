import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet , FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  template: `
    <p>
      todo-list works!
    </p>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller1-Lista de Tareas -lmiranda-app'+'Terminado ' ;
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

