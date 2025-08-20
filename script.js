


const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


//Adding task

function addTask() {
    const tasktext = taskInput.value.trim(); 

    if (tasktext==="") {
        alert("please Enter Something")
        return;
    }


//Create list of Added Task And Create Delete button

const li=document.createElement("li")
li.innerHTML=`
<span>${tasktext}</span>
<button class="deleteBtn">X</button>

`;


//Done mark for completed task

li.addEventListener('click',(e)=>{
    if (e.target.tagName=="SPAN") {
        li.classList.toggle("done")
    }
})


//Deleting Task By using Alerdy created Dlt Button

li.querySelector(".deleteBtn").addEventListener("click",()=>{
    li.style.transform="translateX(100px)";
    li.style.opacity="0";
    setTimeout(() => {
        li.remove()
    }, 300);
})



taskList.appendChild(li);

taskInput.value="";

}

addBtn.addEventListener("click",addTask);
taskInput.addEventListener("keypress",(e)=>{
    if (e.key==="Enter") {
        addTask();
    }
});
