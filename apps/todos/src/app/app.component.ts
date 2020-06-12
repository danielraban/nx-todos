import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@todos/data';

@Component({
  selector: 'todos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];
  title: string;

  constructor(private http: HttpClient) {
    this.title = 'todos';
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  removeTodo() {
    this.http.post('/api/removeTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
