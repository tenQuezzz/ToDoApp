export class ToDoItem {
  constructor(id, title, description, dueDate, priority) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._checked = false;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }

  changeDescription(newDescription) {
    this.description = newDescription;
  }

  changeDueDate(newDate) {
    this.dueDate = newDate;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }

  complete() {
    this.checked = true;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get checked() {
    return this._checked;
  }
}