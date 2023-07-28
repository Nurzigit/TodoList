const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const data = [
      {
        id: 1,
        description: "Complete task 1",
      },
      {
        id: 2,
        description: "Complete task 2",
      },
      {
        id: 3,
        description: "Complete task 3",
      }
];
  

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = taskText + '<button class="deleteBtn">Delete</button>';
    taskList.appendChild(li);
    taskInput.value = "";
    addDeleteListener(li);
  }
}


function deleteTask(event) {
  const task = event.target;
  if (task.classList.contains("deleteBtn")) {
    task.parentElement.remove();
  }
}

function markCompleted(event) {
    const task = event.target;
    if(!task.classList.contains("deleteBtn")){
        task.classList.toggle("completed")
    }
}

function addDeleteListener(task) {
    task.addEventListener("click", markCompleted)
    const deleteBtn = task.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", deleteTask);
}

addBtn.addEventListener("click", addTask);


// For add new task
taskInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addTask()
    }
});

for(let i = 0; i<= data.length; i++){
    const li = document.createElement("li");
    li.innerHTML = `${data[i].description} <button class="deleteBtn">Delete</button>`;
    taskList.appendChild(li);
    addDeleteListener(li);
}
