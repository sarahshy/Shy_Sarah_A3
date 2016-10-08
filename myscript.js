function addNewTask() {
    console.log("Add new task clicked");
    var text = $("#newTaskText").val();
    if (text == "")
        {
            return false;
        } else {
    $("#taskList").prepend($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
    clearText();
    }
};


function clearText() {
    document.querySelector("#newTaskText").value = "";
};


function removeTask(task) {
    $(task).parent().remove();
};
