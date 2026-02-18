var addBtn = document.getElementById("addBtn");
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");
var counter = document.getElementById("counter");

var colors = ["pink","lightgreen","skyblue","orange","violet"];

addBtn.onclick = addTask;
input.addEventListener("keypress", function(e){
    if(e.key == "Enter") addTask();
});

function addTask(){

    if(input.value == "") return alert("Enter task first");

    var li = document.createElement("li");
    li.style.background = colors[Math.floor(Math.random()*colors.length)];

    var text = document.createElement("span");
    text.innerText = input.value;

    var doneBtn = document.createElement("button");
    doneBtn.innerText = "✔";
    doneBtn.onclick = function(){
        text.style.textDecoration = "line-through";
        text.style.opacity = "0.6";
    };

    var del = document.createElement("button");
    del.innerText = "Delete";
    del.onclick = function(){
        li.remove();
        updateCounter();
    };

    li.append(text, doneBtn, del);
    list.appendChild(li);

    input.value = "";
    updateCounter();
}

function updateCounter(){
    counter.innerText = "Total Tasks: " + list.children.length;
}