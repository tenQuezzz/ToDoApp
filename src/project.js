import { ToDoItem } from './item'

export class Project {
  constructor(title, items = []) {
    this._title = title;
    this._items = items;
    this._item_id = 0;
  }

  get items() {
    return this._items;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  addItem(item) {
    this._items.push(item);
  }

  createItem(title, description, dueDate, priority) {
    const newItem = new ToDoItem(this._item_id++, title, description, dueDate, priority);
    this.addItem(newItem);
  }

  removeItem(id) {
    let idx = this._items.findIndex(item => item.id === id);
    if (idx != -1) {
      this._items.splice(idx, 1);
    }
  }
}