import { appController } from "../index.js";

class DomController {
    body = document.body;
    header = this.body.querySelector("header");
    main = this.body.querySelector("main");
    container = this.main.querySelector(".container");
    editDialog = this.main.querySelector(".editDialog");
    addDialog = this.main.querySelector(".addDialog")
    addConfirm = this.main.querySelector("#addconfirmBtn");
    addCancel = this.main.querySelector("#addcancelBtn");
    editconfirm = this.main.querySelector("#editconfirmBtn");
    editcancel = this.main.querySelector("#editcancelBtn");
    addTask = this.main.querySelector(".addTask");
    editForm = this.main.querySelector(".editForm");
    addForm = this.main.querySelector(".addForm")
    constructor() {
    this.bindEvents();
    

  }

  bindEvents() {
    let taskid;
    this.main.addEventListener("click",(e) => {
        let show = false;
        if(e.target.classList.contains("heading")) {
            show = !show;
            console.log(show)
            const projectId = Number(e.target.closest(".heading").parentElement.parentElement.getAttribute("data-key"));
            const taskId = Number(e.target.closest(".heading").parentElement.getAttribute("data-key"));
            console.log(projectId,taskId)
            const project = appController.findProjectById(projectId)
            const task = project.getTaskByID(taskId);
            console.log(project,task);
            
            e.target.parentElement.removeChild(e.target.parentElement.lastChild)
            e.target.parentElement.replaceChild(this.renderTask(task),e.target);
            
        }
        if(e.target.classList.contains("remove")) {
            const taskid = e.target.parentElement.parentElement.getAttribute("data-key")
            appController.handleRemoveTask(Number(taskid));
        }
        if(e.target.classList.contains("edit")) {
            this.editDialog.showModal(); 
           taskid =  e.target.parentElement.parentElement.getAttribute("data-key");

        }
        
    })
    this.addTask.addEventListener("click",(e) => {
        this.addDialog.showModal();
    })

    this.editcancel.addEventListener("click",(e) => {
        this.editDialog.close();
    })

    this.editconfirm.addEventListener("click",(e) => {
        const formData = new FormData(this.editForm);
        let output = {};
        formData.forEach((value, key) => {
          output[key] = value;
        });
        output.id = taskid;
        appController.handleEditTask(output);
    })

    this.editDialog.addEventListener("close",(e) => {
        e.preventDefault();
    } )
    this.addDialog.addEventListener("close",(e) => {
        e.preventDefault();
    })
    this.addCancel.addEventListener("click",(e) => {
        this.addDialog.close();
    })
    this.addConfirm.addEventListener("click",(e) => {
        const formData = new FormData(this.addForm);
        let output = {};
        formData.forEach((value, key) => {
          output[key] = value;
        });
        appController.handleAddTask(output);
    })
 }
  renderProjects(projects) {
    const container = document.createElement("div");
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.setAttribute("data-key",`${project.id}`);
        const projectTitle = document.createElement("h2");
        projectTitle.textContent = project.name;
        projectDiv.appendChild(projectTitle)
        project.tasks().forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.setAttribute("data-key",`${task.id}`);
            const taskTitle = document.createElement("h3");
            taskTitle.classList.add("heading");
            const taskDueDate = document.createElement("p");
            taskTitle.textContent = task.title;
            taskDueDate.textContent = task.dueDate;
            taskDiv.appendChild(taskTitle);
            taskDiv.appendChild(taskDueDate);
            projectDiv.appendChild(taskDiv);
        })
        container.appendChild(projectDiv);
    })
    console.log(container)
    this.container.replaceChildren()
    this.container.appendChild(container)
    return {
        container,
    }

  }

  renderTaskList(taskList) {
    const container = document.createElement("div");
    taskList.tasks().forEach(task => {
        const taskDiv = this.renderTask(task)
        container.appendChild(taskDiv)
    })
    console.log(container);
    return container;
  }

  renderTask(task) {
        const taskDiv = document.createElement("div");
        const taskTitle = document.createElement("h3");
        const taskDescription = document.createElement("p");
        const taskPriority = document.createElement("p");
        const taskCompletion = document.createElement("p");
        const taskDueDate = document.createElement("p");
        const removeTask = document.createElement("button");
        const editTask = document.createElement("button");
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        taskCompletion.textContent = task.isCompleted;
        taskDueDate.textContent = task.dueDate;
        taskPriority.textContent = task.priority;
        removeTask.textContent = "remove";
        removeTask.classList.add("remove");
        editTask.classList.add("edit");
        editTask.textContent = "edit";
        [taskTitle,taskDescription,taskCompletion,taskPriority,taskDueDate,removeTask,editTask].forEach(info => {
            taskDiv.appendChild(info);
        })
        return taskDiv;
  }
}

export default new DomController();