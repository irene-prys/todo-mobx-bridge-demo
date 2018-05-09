import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.model';
import { observable, computed, action } from 'mobx';

@Injectable()
export class TodoList {
  @observable list: TodoItem[];

  constructor() {
    this.list = [];
  }

  @action addNewDeprecated(title: string) {
    console.warn(`you won't be aware about the changes in array in such case. Use 'addNew' method instead!`);
    if (!this.isInList(title)) {
      this.list.push(new TodoItem(title, false));
    }
  }

  @action addNew(title: string) {
    this.list = [...this.list, new TodoItem(title, false)]
  }

  isInList(title) {
    return this.list.find(item => item.title === title);
  }

  @computed get todos() {
    return this.list;
  }

  // todo: implement removing
}