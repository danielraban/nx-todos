import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { SimpleButtonComponent } from './simple-button/simple-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TodosComponent, SimpleButtonComponent],
  exports: [TodosComponent, SimpleButtonComponent],
})
export class UiModule {}
