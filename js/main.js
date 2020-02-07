var input;
var list = [];

function printList() {
  console.log("*******************");
  list.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("*******************");
}

function addTodo() {
  var todo = prompt("Enter a new todo.");
  list.push(todo);
  console.log(todo + " added to list.");
}

function deleteTodo() {
  var index = prompt("Enter index of todo to delete.");
  console.log(list.splice(index, 1) + " removed from list.");
}

while (input != "quit") {
  input = prompt("What woud you like to do?");

  if (input === "new") {
    addTodo();
  } else if (input === "list") {
    printList();
  } else if (input === "delete") {
    deleteTodo();
  }
}
console.log("Ok, goodbye.");
