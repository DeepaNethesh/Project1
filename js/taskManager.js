const createTaskHtml = (name, description, assignedTo, email, dueDate, status, category) => {
  const string = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <div class="text-center">  
                     <img class="card-img-top rounded-circle img-fluid" src="https://st.depositphotos.com/1734074/3427/v/950/depositphotos_34271411-stock-illustration-vector-profile-icon.jpg" alt="Avatar" style="width:20%">
                    </div>
             <div class="card-body">
                <div class="row justify-content-center">
                    <h6 class="card-title text-uppercase category">${category}</h6>
                </div>
                <div class="row">
                    <div class= "col">
                        <h3 class="card-title text-dark AssignedTo">${assignedTo}</h3>
                    </div>
                    <div class= "col">
                        <h5 class="card-title text-muted Status">${status}</h5>
                    </div>
                    <div class= "col">
                        <h5 class="card-title text-muted emailId mb-0">${email}</h5>
                    </div>
                </div>
                <br>
                <div class="row justify-content-center">
                    <h4 class="card-title text-right name">${name}</h4>
                </div>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">Due date: ${dueDate}</small></p>
              </div>
              <div class="card-footer">
                <a  class="btn btn-outline-success">Mark Completed</a>
              </div>
            </div>
            </div>
            `
            return string;
         
}

class TaskManager {
    constructor(currentId = 0) {
        this.tasks =[];
        this.currentId = currentId;
    }
    // get tasks() {
    //     return this.tasks;
    // }
    addTask(name, description, assignedTo, email,dueDate, status, category) {
    // Create a task object that we will push to the list of tasks
    
    const task = {
      // Increment the current Id for each new task
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      email: email,
      dueDate: dueDate,
      status: status,
      category: category
    };

    this.tasks.push({ task });
  }
  render () {
    let tasksHtmlList = [];
    this.tasks.forEach(task => { 
      let currentTask = task;
      console.log(currentTask)
      let taskHtml = createTaskHtml(currentTask.task.name, currentTask.task.description, currentTask.task.assignedTo, currentTask.task.email, currentTask.task.dueDate, currentTask.task.status, currentTask.task.category)
      tasksHtmlList.push(taskHtml)
      // console.log(taskHtml)
     
      // return taskHtml;
    });
    // console.log(tasksHtmlList)
    let tasksHtml1 = tasksHtmlList.join('\n')
    // console.log(tasksHtml1)
    let toDoList = document.querySelector("#taskList");
    toDoList.innerHTML = tasksHtml1;
  }
}

const task1 = new TaskManager();
task1.addTask('study','hghjhjhj', 'deepa', '21/02/2021', 'in-progress')
console.log(task1)
