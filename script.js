// Mengambil elemen
const inputBox = document.getElementById("input-box");
const inputDate = document.getElementById("date-input");
const inputType = document.getElementById("type-select");
const listContainer = document.getElementById("list-container");

// Default date hari ini
function setDate() {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    inputDate.value = formattedDate;
}

// Menambah task
function addTask() {
    const taskText = inputBox.value;
    const taskDate = inputDate.value;
    const taskType = inputType.value;

    if (taskText === '') {
        alert("Task description is empty!");
    } else if (taskDate === '') {
        alert("Please select a date!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${taskText}</strong><br>Date: ${taskDate}<br>Type: ${taskType}`;
        li.classList.add(taskType);
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    document.getElementById("date-input").value = "";
    setDate();
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Menyimpan secara lokal
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

setDate();
showTask();