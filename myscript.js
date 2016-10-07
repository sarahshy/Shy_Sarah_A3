// $(document).ready(function() {
//     checkbox()
//     deleteButton()
// });

function addNewTask() {
    console.log("Add new task clicked");
    var text = $("#newTaskText").val();
    if (text == "")
        {

        } else {
    //$("#taskList").append($("<li>").text(text));
    $("#taskList").prepend($("<li><input type = 'checkbox'> "+text+" </li>").append($("<button onclick = removeTask(this) class = delete>x</button>")));
    clearText();
    }
};


function clearText() {
    document.querySelector("#newTaskText").value = "";
};









///Checkboxes
// function checkbox() {
//     $('<input type="checkbox" value="1" class = "boxcheck"/>').prependTo('li');
// }

// function checkboxNewTask() {
//     ($('<input type = "checkbox" class = "boxcheck">')).prependTo($("#taskList").children().last());
// };

// $('.boxcheck').click(function() {
//     $().wrap("<strike>");
// });

// function deleteButton() {
//     $('#taskList').children().append('<button class = "remove">x</button>');
// }

 function removeTask(task) {
    $(task).parent().remove();
 };


// function deleteButton() {
//     for (i = 0; i < $('li').length; i++) {
//         console.log($('li:eq(i)')) //.append($('<button>'));
//         console.log("test");
//         //$('#tasklist').children().append('<button>x</button>');
//     };
// };
