import "./style.css";
import { Task } from "./modules/task.js";
import { TaskList } from "./modules/taskList.js";
import { tasks } from "./modules/sampleTasks.js";
import { storage } from "./modules/localStorage.js";

import domController from "./modules/domController.js";

class AppController {
  static #projects = [];
  storage;
  

   constructor() {
    this.defaultProject = new TaskList("default");
    AppController.#projects.push(this.defaultProject);
    this.defaultProject.setId(AppController.#projects);
    this.storage = JSON.parse(localStorage.getItem("tasks"))
    if(localStorage.getItem("tasks")) {
        this.storage.forEach(task => {
            console.log("hello")
            const {title,description,dueDate,priority} = task;
            const newTask = new Task(title,description,dueDate,priority);
            AppController.#projects.forEach(project => {
                if(project.name === "default") this.defaultProject.addTask(newTask);
            })
    
        }) 

    }
    else {
        tasks.forEach(task => {
        const {title,description,dueDate,priority} = task;
        const newTask = new Task(title,description,dueDate,priority);
        AppController.#projects.forEach(project => {
            if(project.name === "default") this.defaultProject.addTask(newTask);
        })

    })
}
     domController.renderProjects(AppController.#projects);
    }

  handleAddProject(name) {
    const newProject = new TaskList(name);
    AppController.#projects.push(newProject);
    newProject.setId(AppController.#projects);
    domController.renderProjects(AppController.#projects);
  }

  handleFindProject(title) {
   return AppController.#projects.find(project => project.name = title)
  }

  findProjectById(projectId) {
    return AppController.#projects.find(project => {
     return  project.id === projectId  
    })
  }
  findTaskFromProject(taskid) {
    taskid = Number(taskid);
    let task;
    AppController.#projects.forEach(project => {
        const newtask = project.getTaskByID(taskid);
        if(newtask) {
            console.log(newtask)
            task = newtask
        }; 
    })
    return task;
  }
  findProjectFromTask(task) {
    return AppController.#projects.find(project => {
        const tast = project.getTaskByID(task.id);
        if(task) return true;
    })
  }

  handleAddTask(task) {
       const newProject = this.handleFindProject(task.title)
       console.log(task);
       newProject.addTask(task);
       domController.renderProjects(AppController.#projects);
    }

    handleEditTask(edit) {
       const {title,description,priority,date,completion,id} = edit;
       console.log(title,description,priority,date,completion,id)
       const task = this.findTaskFromProject(id);
       console.log(task);
       
       task.title = title || task.title;
       task.description = description || task.description;
       task.priority = priority || task.priority;
       task.dueDate = date || task.dueDate;
       task.isCompleted = completion || task.isCompleted;
       domController.renderProjects(AppController.#projects);
    }

    handleRemoveTask(taskid) {
        const task = this.findTaskFromProject(taskid);
        const project = this.findProjectFromTask(task);
        project.removeTask(taskid);
        domController.renderProjects(AppController.#projects);
    }

    handleCompleteTask() {
        const task = this.defaultProject.getTaskByID(0)
        if(task.isCompleted) console.log("completed");
        else console.log("not completed");
    }

   
  
}

const appController = new AppController();
console.log(appController.handleFindProject("default"));
appController.handleAddProject("groceries")
//appController.handleAddTask();
//appController.handleRemoveTask();
//appController.handleAddTask();
//appController.handleCompleteTask();

export {AppController,appController};
