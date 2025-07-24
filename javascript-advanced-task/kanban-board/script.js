var boardname = document.getElementById("board-name");
var addItem = document.getElementById("add-item");
var addTaskDialog = document.getElementById("add-task-dialog");
var savebutton = document.getElementById("save-task");
var cancelbutton = document.getElementById("cancel-task");
var deleteButton = document.getElementById("delete");
var inputBox = document.getElementById("task-input");
var isDialogOpened = false;
class Task {
  constructor(taskDescription) {
    this.taskId = crypto.randomUUID();
    this.taskDescription = taskDescription;
  }
}
class Board {
  constructor(boardName) {
    this.boardId = crypto.randomUUID();
    this.boardName = boardName;
    this.taskList = [];
  }

  addTask(taskDescription) {
    console.log(this.taskList);
    var task = new Task(taskDescription);
    this.taskList.push(task);
    document.getElementById("todo-tasks").innerHTML += `
   <div class="task" id="task-${task.taskId}">
            <p class="task-description">
            ${task.taskDescription}
            </p>
            <div class="btn-group">
              <button id="edit-${task.taskId}">Edit</button>
              <button id="delete-${task.taskId}" onclick="deleteTask(event)">Delete</button>
            </div>
          </div>`;
  }
  removeTask(taskId) {
    this.taskList = this.taskList.filter((task) => task.taskId != taskId);
    console.log(this.taskList);
    console.log(`Task to remove task-${taskId}`)
    var taskToRemoveFromTheDom = document.getElementById(`task-${taskId}`);
    taskToRemoveFromTheDom.remove();
  }
}
class BoardCollection{
    constructor(collectionName="Board Collection"){
        this.collectionName = collectionName;
        this.boards=[
            Board("Todo"),
            Board("Ongoing"),
            Board("Done"),
            Board("Stuck")
        ]
    }

}
var todoboard = new Board("Todo");
var doingBoard = new Board("Doing Board");
var doneBoard = new Board("Done Board");
var backLogBoard = new Board("Backlog Board");
document.addEventListener("DOMContentLoaded", (event) => {
  addItem.addEventListener("click", onAddItemClicked);
  savebutton.addEventListener("click", onSaveButtonClicked);
  cancelbutton.addEventListener("click", onCancelClicked);
});

function onCancelClicked() {
  if (isDialogOpened) {
    isDialogOpened = false;
    addTaskDialog.style.display = "none";
    addItem.style.display = "inline-block";
  }
}
function onAddItemClicked() {
  if (!isDialogOpened) {
    addTaskDialog.style.display = "flex";
    addItem.style.display = "none";
    isDialogOpened = true;
  }
}
function onSaveButtonClicked() {
  if (isDialogOpened) {
    var taskDetails = inputBox.value;
    todoboard.addTask(taskDetails);
    isDialogOpened = false;
    addTaskDialog.style.display = "none";
    addItem.style.display = "inline-block";
  }
}
function closeDialog() {
  addTaskDialog.style.display = "none";
  isDialogOpened = false;
}
function deleteTask(event) {
  var taskId = event.target.id.toString().replace("delete-",'');
  todoboard.removeTask(taskId);
}
