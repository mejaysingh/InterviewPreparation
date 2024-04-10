document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', async () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      try {
        const addedTask = await addTask(taskText);
        renderTask(addedTask);
        taskInput.value = '';
      } catch (error) {
        console.error('Error adding task:', error.message);
      }
    });
  
    taskList.addEventListener('click', async (event) => {
      if (event.target.tagName === 'BUTTON') {
        const taskId = event.target.dataset.id;
        const action = event.target.dataset.action;
  
        try {
          if (action === 'delete') {
            await deleteTask(taskId);
            removeTaskElement(taskId);
          } else if (action === 'edit') {
            const newText = prompt('Edit task:', event.target.previousElementSibling.textContent);
            if (newText !== null) {
              const updatedTask = await editTask(taskId, newText);
              updateTaskElement(taskId, updatedTask.text);
            }
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
    });
  
    function renderTask(task) {
      const taskElement = document.createElement('li');
      const spanElement = document.createElement('span');
      spanElement.textContent = task.text;
  
      const editButton = createButton('Edit', 'edit', task.id);
      const deleteButton = createButton('Delete', 'delete', task.id);
  
      taskElement.appendChild(spanElement);
      taskElement.appendChild(editButton);
      taskElement.appendChild(deleteButton);
  
      taskList.appendChild(taskElement);
    }
  
    function createButton(text, action, id) {
      const button = document.createElement('button');
      button.textContent = text;
      button.dataset.id = id;
      button.dataset.action = action;
      return button;
    }
  
    function removeTaskElement(id) {
      const taskElement = document.querySelector(`[data-id="${id}"]`);
      if (taskElement) {
        taskElement.remove();
      }
    }
  
    function updateTaskElement(id, newText) {
      const taskElement = document.querySelector(`[data-id="${id}"]`);
      if (taskElement) {
        taskElement.querySelector('span').textContent = newText;
      }
    }
  
    // Simulated asynchronous functions
    async function addTask(text) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const newTask = { id: Date.now(), text };
          resolve(newTask);
        }, 0);
      });
    }
  
    async function deleteTask(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() < 0.8;
          if (success) {
            resolve();
          } else {
            reject(new Error('Unable to delete task'));
          }
        }, 500);
      });
    }
  
    async function editTask(id, newText) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const updatedTask = { id, text: newText };
          resolve(updatedTask);
        }, 500);
      });
    }
  });
  