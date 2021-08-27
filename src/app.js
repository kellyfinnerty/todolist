import './image-component';
import ToDo from './todo.js'
import Project from './project.js'

console.log("test!");
console.log("hello");

var testProj = new Project("test project");
console.log("hi");
console.log(testProj);

var testToDo = new ToDo("test todo", "test description", new Date(2021, 9, 27), "High", "notes");
console.log(testToDo);

