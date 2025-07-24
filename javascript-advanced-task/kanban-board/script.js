function getBoardElements(boardId) {
  return {
    boardName: document.getElementById(`board-name-${boardId}`),
    addItem: document.getElementById(`add-item-${boardId}`),
    addTaskDialog: document.getElementById(`add-task-dialog-${boardId}`),
    saveButton: document.getElementById(`save-task-${boardId}`),
    cancelButton: document.getElementById(`cancel-task-${boardId}`),
    inputBox: document.getElementById(`task-input-${boardId}`),
    taskList: document.getElementById(`tasks-${boardId}`),
  };
}

var isBoardCollectionCreated = false;
var boardCollection =null;
class Task {
  constructor(taskDescription) {
    this.taskId = crypto.randomUUID();
    this.taskDescription = taskDescription;
  }
}
class Board {
  constructor(name) {
    this.boardId = crypto.randomUUID();
    this.boardName =name;
    this.taskList = [];
    this.isDialogOpened = false;
    document.getElementById("boards").innerHTML += `
    <div id="board-${this.boardId}" class="board">
        <h3 class="board-name">${this.boardName} </h3>

        <button class="add-item-btn" id="add-item-${this.boardId}">Add item</button>
        <div id="add-task-dialog-${this.boardId}" class="add-task-dialog">
          <textarea
            id="task-input-${this.boardId}"
            name="task-text"
            class="task-text-input"
            placeholder="Enter your task here..."
          ></textarea>
          <div class="btn-group task-input-group">
            <!-- <button>Edit</button> -->
            <button id="save-task-${this.boardId}">Save</button>
            <button id="cancel-task-${this.boardId}">Cancel</button>
          </div>
        </div>
        <div id="tasks-${this.boardId}" class="tasks">
          <!-- <input
            class="task-text-input"
            type="text"
            placeholder="Add a new task..."
          /> -->
          <!-- 
          <div class="task">
            <p class="task-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="btn-group">
              <button>Edit</button>
             
              <button>Cancel</button>
            </div>
          </div> -->
        </div>
      </div>
    `;
  
    const {
      boardName,
      addItem,
      addTaskDialog,
      saveButton,
      cancelButton,
      inputBox,
      taskList,
    } = getBoardElements(this.boardId);

    this.boardNameText = boardName;
    this.addItem = addItem;
    this.addTaskDialog = addTaskDialog;
    this.saveButton = saveButton;
    this.cancelButton = cancelButton;
    this.inputBox = inputBox;
    // this.taskListDOM = taskList;
    this.addItem.addEventListener("click", this.onAddItemClicked.bind(this));
    this.saveButton.addEventListener("click", this.onSaveButtonClicked.bind(this));
    this.cancelButton.addEventListener("click", this.onCancelClicked.bind(this));
    
  }

  addTask(taskDescription) {
    console.log(this.taskList);
    var task = new Task(taskDescription);
    this.taskList.push(task);
    document.getElementById("tasks-" + this.boardId).innerHTML += `
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
    console.log(`Task to remove task-${taskId}`);
    var taskToRemoveFromTheDom = document.getElementById(`task-${taskId}`);
    taskToRemoveFromTheDom.remove();
  }
  onCancelClicked() {
    if (this.isDialogOpened) {
      this.isDialogOpened = false;
      this.addTaskDialog.style.display = "none";
      this.addItem.style.display = "inline-block";
    }
  }
  onAddItemClicked() {
    if (!this.isDialogOpened) {
      
      this.addTaskDialog.style.display = "flex";
      this.addItem.style.display = "none";
      this.isDialogOpened = true;
    }
  }
  onSaveButtonClicked() {
    if (this.isDialogOpened) {
      var taskDetails = this.inputBox.value;
      this.addTask(taskDetails);
      this.isDialogOpened = false;
      this.addTaskDialog.style.display = "none";
      this.addItem.style.display = "inline-block";
    }
  }
  closeDialog() {
    this.addTaskDialog.style.display = "none";
    this.isDialogOpened = false;
  }
  deleteTask(event) {
    var taskId = event.target.id.toString().replace("delete-", "");
    this.removeTask(taskId);
  }
}
class BoardCollection {
  constructor(collectionName = "Board Collection") {
    this.collectionName = collectionName;
    this.boards = [
      new Board("Todo"),
      new Board("Ongoing"),
      new Board("Done"),
      new Board("Stuck"),
    ];
  }
}
// var todoboard = new Board("Todo");
// var doingBoard = new Board("Doing");
// var doneBoard = new Board("Done");
// var backLogBoard = new Board("Backlog");
  ;
document.addEventListener("DOMContentLoaded", (event) => {
    if(!isBoardCollectionCreated){
        boardCollection=new BoardCollection()
        isBoardCollectionCreated=true
    }
});
