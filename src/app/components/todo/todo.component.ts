import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { TodoList } from './../../models/todo-list.model';
import { Filter } from './../../models/filter.model';
import { TodoItemState } from './../../enums/todo-item-state.enum';
import { fromMobx } from 'ngx-mobx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit, OnDestroy {
  private todo;
  private todoStoreSubscription: Subscription;
  titleToAdd: string;

  constructor(private todoStore: TodoList, private filter: Filter, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.todoStoreSubscription = fromMobx(() => this.todoStore.todos).subscribe(todo => {
      this.todo = todo;
      this.ref.markForCheck();// run change detection for a component
    });
  }

  public get todoList() {
    if (!this.todo) {
      return [];
    }
    return this.todoStore.list.filter(item => {
      if (!this.isSatisfySerchFilter(item, this.filter.searchFilter)) {
        return false;
      }
      switch (this.filter.stateFilter) {
        case TodoItemState.ACTIVE: return !item.done;
        case TodoItemState.DONE: return item.done;
        default: return true;
      }
    });
  }

  logChangeDetection() {
    console.log('...change detection...' + JSON.stringify(this.todoList));
  }

  private isSatisfySerchFilter(todoItem, serchFilter: string) {
    if (serchFilter.trim().length === 0) {
      return true;
    }

    return todoItem.title.includes(serchFilter);
  }

  public get isTodoEmpty() {
    return !this.todo.list || this.todo.list.length === 0;
  }

  ngOnDestroy() {
    if (this.todoStoreSubscription) {
      this.todoStoreSubscription.unsubscribe();
    }
  }
}