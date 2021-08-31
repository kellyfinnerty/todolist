import Task from './modules/task.js'
import Project from './modules/project.js'
import  UserInterface from './modules/displayController.js'
import MyStorage from './modules/storageManager.js'


var ui = new UserInterface();
ui.loadHomePage();


/*

MyStorage.storeProject(new Project("Kelly's Pickles"));
console.log(MyStorage.getStoredProject("Kelly's Pickles"));
MyStorage.removeStoredProject("Kelly's Pickles");
MyStorage.storeProject(new Project("Friday's Project"));
MyStorage.storeProject(new Project("Lilly's Project"));
MyStorage.renameStoredProject("Lilly's Project", "Millie's Project");

var myTask = new Task("My title", "my description", "due date", "high", "these are my notes");
MyStorage.storeTask("Millie's Project", myTask);

console.log(MyStorage.getTask("Millie's Project", myTask.getTitle()));

*/
