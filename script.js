const taskInput = 
document.getElementById("taskInput");
const taskList =
document.getElementById("taskList");
const emptyMessage =
document.getElementById("emptyMessage")

function addTask(){
    const taskText =
    taskInput.value.trim();

    if (taskText===""){
        alert("Por favor,digite uma tarefa");
        return;
    }

    const li =
    document.createElement("li");
    li.textContent = taskText;

    const removeButton =
    document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.style.marginLeft = "5px";
    removeButton.onclick =function(){
        taskList.removeChild(li);
        checkEmpty();
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = "";
    checkEmpty();
}

function checkEmpty(){
    emptyMessage.style.display =
    taskList.children.length === 0 ?
    "block" : "none"
}

checkEmpty();
