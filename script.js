function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
        ${taskText}
        <span class="delete" onclick="deleteTask(this)">❌</span>
    `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
