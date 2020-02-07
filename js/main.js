var input;
var list = [];

while (input != "quit") {
  input = prompt("What woud you like to do?");

  if (input === "new") {
    list.push(prompt("Enter a new todo."));
    console.log(list);
  } else if (input === "list") {
    console.log(list);
  }
}
console.log("Ok, goodbye.");
