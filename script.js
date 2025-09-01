const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Adding task
function addTask() {
    const tasktext = taskInput.value.trim();

    if (tasktext === "") {
        alert("Please enter something");
        return;
    }

    // Create list of Added Task And Create Delete button
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${tasktext}</span>
        <button class="deleteBtn">X</button>
    `;

    // Done mark for completed task
    li.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
            li.classList.toggle("done");
        }
    });

    // Deleting Task With Animation
    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.classList.add("removed"); // Apply fadeOut animation
        li.addEventListener("animationend", () => {
            li.remove();
        });
    });

    // Append task
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
