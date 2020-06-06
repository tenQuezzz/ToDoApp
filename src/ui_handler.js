export function createAppUI(app) {
  const parent = document.getElementById("main");
  const appContainer = createElement('div', '',
    {
      'id': 'app-container'
    },
    {
      'width': '90%',
      'margin': '0 auto',
      'display': 'flex',
      'flex-flow': 'row wrap'
    });

  const addProjectButton = createElement('button', 'Create project', { "id": "add-project" });
  addProjectButton.addEventListener('click', () => {
    do {
      var title = prompt('Title: ');
    } while (!app.createNewProject(title));
    updateProjects(app, appContainer);
  });

  parent.appendChild(addProjectButton);
  updateProjects(app, appContainer);
  parent.appendChild(appContainer);
}

function createProjectContainer(app, project) {
  const projectContainer = createElement('div', '', {
    'id': project.title,
    'class': 'project'
    },
    {
      'width': '30%',
      'margin': '10px auto',
      'border-radius': '15px'
    });
  projectContainer.appendChild(createElement('h2', project.title, {}, {
    'text-align': 'center'
  }));

  const addButton = createElement('button', '+', { 'class': 'add-button' });
  addButton.addEventListener('click', e => {
    addNewToDoItemToProject(project);
  });

  const notesContainer = createElement('div', '', { 'class': 'notes' });
  projectContainer.appendChild(addButton);
  projectContainer.appendChild(notesContainer);
  updatedNotesFromProject(notesContainer, project);

  const removeButton = createElement('button', 'remove project', { 'class': 'remove-project' });
  removeButton.addEventListener('click', () => {
    app.deleteProject(project.title);
    updateProjects(app, document.getElementById('app-container'));
  });
  projectContainer.appendChild(removeButton)
  return projectContainer;
}

function updateProjects(app, appContainer) {
  const oldProjects = appContainer.querySelectorAll('.project');
  oldProjects.forEach(node => appContainer.removeChild(node));

  for (let project of app.projects) {
    appContainer.appendChild(createProjectContainer(app, project));
  }
}

function updatedNotesFromProject(notesContainer, project) {
  notesContainer.textContent = '';
  for (let item of project.items) {
    const toDoItem = createToDoItem(item);
    const removeButton = createElement('button', 'remove', {'class': 'remove-button'});
    removeButton.addEventListener('click', e => {
      project.removeItem(item.id);
      removeToDoItemFromProject(project, item.id);
    })
    toDoItem.appendChild(removeButton);
    notesContainer.appendChild(toDoItem);
  }
}

function createToDoItem(item) {
  const itemContainer = createElement('div', '',
    {
      'item-id': item.id,
      'class': 'toDoItem'
    },
    {
      'width': '90%',
      'margin': '10px auto',
      'padding': '10px',
      'border-radius': '15px',
      'background-color': getColorDependsOnPriority(item.priority)
    });
  itemContainer.appendChild(createElement('p', item.title, {},
    {
      'width': '100%',
      'margin': '0 auto',
      'font-weight': 'bold',
      'border-bottom': '1px solid white'
    }));
  itemContainer.appendChild(createElement('p', item.description));
  itemContainer.appendChild(createElement('p', item.dueDate));
  return itemContainer;
}

function removeToDoItemFromProject(project, item_id) {
  const container = document.getElementById(project.title).querySelector('.notes');
  const itemToDelete = container.querySelector(`[item-id="${item_id}"]`);
  container.removeChild(itemToDelete);
}

function addNewToDoItemToProject(project) {
  const container = document.getElementById(project.title).querySelector('.notes');
  const title = prompt('Title: ');
  const description = prompt('Description: ');
  const dueDate = prompt('Due date (dd-mm-yyyy): ');
  const priority = prompt('Priority(importan/medium/plain): ');
  project.createItem(title, description, dueDate, priority);
  updatedNotesFromProject(container, project);
}

function createElement(tagName, content, attributes = {}, styles = {}) {
  const element = document.createElement(tagName);
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
  Object.keys(styles).forEach(style => {
    element.style[style] = styles[style];
  });
  element.textContent = content;
  return element;
}

function getColorDependsOnPriority(priority) {
  if (priority === 'important') return 'tomato';
  else if (priority === 'medium') return 'dodgerblue';
  else return 'green';
}