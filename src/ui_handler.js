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

  let addProjectButton = createElement('button', 'Create project', { "id": "add-project" });
  addProjectButton.addEventListener('click', () => {
    do {
      var title = prompt('Title: ');
    } while (!app.createNewProject(title));
    updateAppProjects(app, appContainer);
  });

  parent.appendChild(addProjectButton);
  updateAppProjects(app, appContainer);
  parent.appendChild(appContainer);
}

function createProjectContainer(app, project) {
  let projectContainer = createElement('div', '', {
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

  let removeButton = createElement('button', '-', { 'class': 'remove-project' });
  removeButton.addEventListener('click', () => {
    app.deleteProject(project.title);
    updateAppProjects(app, document.getElementById('app-container'));
  });

  let notesContainer = createElement('div', '', { 'class': 'notes' });
  projectContainer.appendChild(removeButton);
  projectContainer.appendChild(notesContainer);
  updateProjectContainer(notesContainer, project);
  return projectContainer;
}

function updateAppProjects(app, appContainer) {
  let oldProjects = appContainer.querySelectorAll('.project');
  oldProjects.forEach(node => appContainer.removeChild(node));

  for (let project of app.projects) {
    appContainer.appendChild(createProjectContainer(app, project));
  }
}

function updateProjectContainer(container, project) {
  container.textContent = '';
  let addButton = createElement('button', '+', {'class': 'add-button'});
  addButton.addEventListener('click', e => {
    addNewToDoItem(project);
  });
  container.appendChild(addButton);

  for (let item of project.items) {
    let toDoItem = createToDoItem(item);
    let removeButton = createElement('button', 'remove', {'class': 'remove-button'});
    removeButton.addEventListener('click', e => {
      project.removeItem(item.id);
      removeItemFromProject(project, item.id);
    })
    toDoItem.appendChild(removeButton);
    container.appendChild(toDoItem);
  }
}

function createToDoItem(item) {
  let itemContainer = createElement('div', '',
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

function removeItemFromProject(project, item_id) {
  const container = document.getElementById(project.title);
  let itemToDelete = container.querySelector(`[item-id="${item_id}"]`);
  container.removeChild(itemToDelete);
}

function addNewToDoItem(project) {
  const container = document.getElementById(project.title).querySelector('.notes');
  let title = prompt('Title: ');
  let description = prompt('Description: ');
  let dueDate = prompt('Due date (dd-mm-yyyy): ');
  let priority = prompt('Priority(importan/medium/plain): ');
  project.createItem(title, description, dueDate, priority);
  updateProjectContainer(container, project);
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
  if (priority === 'important') {
    return 'tomato';
  } else if (priority === 'medium') {
    return 'dodgerblue';
  } else {
    return 'green';
  }
}