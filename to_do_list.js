var myInput = document.getElementById("myInput");
var myList = document.getElementById("myList");

function createItem() {
    var task = myInput.value;
    var li = document.createElement("li");
    li.textContent = task;
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function() {
        li.remove()
    };
    li.appendChild(deleteBtn);
myList.appendChild(li);
myInput.value = "";
}