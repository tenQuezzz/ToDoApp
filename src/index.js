import { ToDoItem } from './item'
// import { Project } from './project'
import { ToDoApp } from './app'
import { createAppUI } from './ui_handler'

// r(id, title, description, dueDate, priority)

let app = new ToDoApp();
app.deleteProject('Default project');

app.createNewProject('Test project', [
  new ToDoItem('#1', 'Finish JS tutorial',
    `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam doloribus quo hic quisquam voluptate harum minima eveniet, neque pariatur repellendus quam corporis perspiciatis cumque ab modi officiis expedita quaerat voluptates molestiae, adipisci tempore. Commodi, veniam atque doloribus, nihil provident est vitae cum laboriosam cumque, nobis explicabo et maiores! Ex, quisquam.
    `,
    'no',
    'important'),
  new ToDoItem('#2', 'second item', 'just for test', 'no', 'important'),
  new ToDoItem('#3', 'third item', 'just for test', 'no', 'important'),
]);

app.createNewProject('Another project', [
  new ToDoItem('#1', 'first item', 'just for test', 'no', 'important'),
  new ToDoItem('#2', 'second item', 'just for test', 'no', 'important'),
  new ToDoItem('#3', 'third item', 'just for test', 'no', 'important'),
]);

app.createNewProject('Test project #2', [
  new ToDoItem('#1', 'first item', 'just for test', 'no', 'important'),
  new ToDoItem('#2', 'second item', 'just for test', 'no', 'important'),
  new ToDoItem('#3', 'third item', 'just for test', 'no', 'important'),
]);

app.createNewProject('Another project #2', [
  new ToDoItem('#1', 'first item', 'just for test', 'no', 'important'),
  new ToDoItem('#2', 'second item', 'just for test', 'no', 'important'),
  new ToDoItem('#3', 'third item', 'just for test', 'no', 'important'),
]);

createAppUI(app);
