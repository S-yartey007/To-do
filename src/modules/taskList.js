class TaskList {
    #tasks = [];
    id;
    constructor(name) {
        this.name = name;
        this.setTaskId();
    }
   
    tasks() {
        return this.#tasks;
    }

    setId(projects) {
        this.id = projects.indexOf(this);
    }

    setTaskId() {
        let count = 0;
        this.#tasks.forEach(task => {
            task.id = count;
            count++;
        })
    }

    addTask(task) {
        this.#tasks.push(task);
        this.setTaskId();
    }

    removeTask(taskId) {
        this.#tasks.splice(taskId,1);
        this.setTaskId();
    }

    getTaskByID(taskId) {
        return this.#tasks.find(task => {
           return task.id === taskId;
        });
    }

    filterTasks(filter) {
        return this.#tasks.filter(task => {
            filter(task);
        })
    }
    sortTasksByDate() {
        return this.#tasks.sort((a,b) => {
            return a.dueDate < b.dueDate ? -1 : 1;
        })
    }

    sortTasksByPriority() {
        return this.#tasks.sort((a,b) => {
           return a.priority < b.priority ? -1 : 1; 
        })
    }
  
}

export {TaskList};