console.log("CONNECTED!");

var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        var newTodo = prompt("Enter now todo");
        // add to todos array
        todos.push(newTodo);
    } else if (input === "delete") {
        // ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        // delete that todo
        todos.splice(index, 1);
    }
    var input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
    console.log("*********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("*********");
}