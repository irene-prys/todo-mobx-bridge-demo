import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoList } from './../../models/todo-list.model';
import { Filter } from './../../models/filter.model';
import { TodoItemState } from './../../enums/todo-item-state.enum';

@Component({
  selector: 'todo-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  todoStates = [TodoItemState.ALL, TodoItemState.ACTIVE, TodoItemState.DONE];

  constructor(private filter: Filter) {
  }

  get todoFilter() {
    return this.filter;
  }

  logChangeDetection() {
    console.log('...ch/d in filtering...');
  }


}