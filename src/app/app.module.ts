import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoComponent } from './components/todo/todo.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FilterComponent } from './components/filtering/filters.component';
import { TodoList } from './models/todo-list.model';
import { Filter } from './models/filter.model';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TodoComponent, ActionsComponent, FilterComponent],
  bootstrap: [AppComponent],
  providers: [TodoList, Filter]
})
export class AppModule { }
