class Task {
    id;
    constructor(title,description,dueDate,priority,isCompleted = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isCompleted = isCompleted;
    }

 /*   setId(taskList) {
    this.id = taskList.indexOf(this)
  } */

    markComplete() {
        this.isCompleted = true;
    }
    markIncomplete() {
        this.isCompleted = false;
    }
    editTask(title,description,dueDate,priority) {
        this.title = title || this.title;
        this.description = description || this.description;
        this.dueDate = dueDate || this.dueDate;
        this.priority = priority || this.priority

    }

    toggleComplation() {
        this.isCompleted = this.isCompleted ? false : true;
    }
}

export {Task};
