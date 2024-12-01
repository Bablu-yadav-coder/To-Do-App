 let btn = document.querySelector(".btn");
 let list = document.querySelector(".list");
 let task = document.querySelector(".task");

function addTask() {
    if(task.value === '') {
        alert("You must write something.");
    } else {
        let li = document.createElement("li");
        li.innerText = task.value;
        list.appendChild(li);

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
 }

 btn.addEventListener("click" ,()=> {
    addTask();
    task.value = "";
    saveData();
 })

list.addEventListener("click", (e)=> {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }  else if(e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

showTask();