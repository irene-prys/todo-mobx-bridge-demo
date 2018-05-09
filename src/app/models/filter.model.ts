import { Injectable } from '@angular/core';
import { TodoItemState } from './../enums/todo-item-state.enum';

@Injectable()
export class Filter {
  searchFilter: string;
  stateFilter: TodoItemState;

  constructor() {
    this.searchFilter = '';
    this.stateFilter = TodoItemState.ALL;
  }
}