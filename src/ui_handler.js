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
  for (let project of app.projects) {
    appContainer.appendChild(createProjectContainer(project));
  }
  parent.appendChild(appContainer);
}

function createProjectContainer(project) {
  let projectContainer = createElement('div', '', {
    'id': project.title
    },
    {
      'width': '30%',
      'margin': '10px auto',
      'border': '1px solid black',
      'border-radius': '15px'
    });
  updateProjectContainer(projectContainer, project);
  return projectContainer;
}

function updateProjectContainer(container, project) {
  container.textContent = '';
  container.appendChild(createElement('h2', project.title, {}, {
    'text-align': 'center'
  }));
  let addButton = createElement('button', 'add');
  addButton.addEventListener('click', e => {
    addNewToDoItem(project);
  });
  container.appendChild(addButton);

  for (let item of project.items) {
    let toDoItem = createToDoItem(item);
    let removeButton = createElement('button', 'remove');
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
      'item-id': item.id
    },
    {
      'width': '90%',
      'margin': '10px auto',
      'padding': '10px',
      'border': '1px solid black',
      'border-radius': '15px'
    });
  itemContainer.appendChild(createElement('p', item.title, {},
    {
      'width': '100%',
      'margin': '0 auto',
      'font-weight': 'bold'
    }));
  itemContainer.appendChild(createElement('p', item.description));
  itemContainer.appendChild(createElement('p', item.dueDate));
  itemContainer.appendChild(createElement('p', item.priority));
  return itemContainer;
}

function removeItemFromProject(project, item_id) {
  const container = document.getElementById(project.title);
  let itemToDelete = container.querySelector(`[item-id="${item_id}"]`);
  container.removeChild(itemToDelete);
}

function addNewToDoItem(project) {
  const container = document.getElementById(project.title);
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