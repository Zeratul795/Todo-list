// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {  
    var id = "id" + Math.random().toString(16).slice(2)
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const cardBody = `
    <div class="card" id="newCard">
    <h5 class="card-header bg bg-warning">Task Card <span id="time" style = "padding-top:5px;"></span></h5>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">
        <strong>
          ${card.name}
          <br>
          Assigned to
          <br>
          Due date
          <br>
          Status
          <br>
          Description
        </strong>
      </p>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-secondary">Delete</a>
    </div>
  </div> `;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
