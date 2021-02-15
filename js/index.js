let form = document.querySelector('#taskForm')
let newTaskNameInput = document.querySelector("#staticname");
let newTaskValue = document.querySelector('#exampleTextarea1');
let assigned = document.querySelector('#assigned');
let newTaskEmail = document.querySelector('#staticEmail');
let newTaskDate = document.querySelector('#date');
let getName = document.querySelector('#mobility');
let newStatus = document.querySelector('#menu');
let newStatus1;
let assignedTo;
let categoryName = document.querySelector('#category1');
let clearTask = document.querySelector('#clearTask')

//creates the Task manager instance from the class
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();
// localStorage.clear();

//add tasks when the user clics submit
form.addEventListener('click', (event) => {
    event.preventDefault();
    taskManager.addTask(
        newTaskNameInput.value,
        newTaskValue.value,
        assignedTo,
        newTaskEmail.value,
        newTaskDate.value,
        newStatus1,
        categoryName
    );
    //display list of tasks  
    taskManager.render();
    clearFormFields();  
    taskManager.save();
});


//modifies the card and task when the user clicks the 'mark completed' button
let toDoList = document.querySelector("#taskList")

toDoList.addEventListener('click', (event) => { 
    if(event.target.classList.contains('done-button')) {
        let parentTask = event.target.parentElement.parentElement;
        //console.log(parentTask)
        let taskId = Number(parentTask.querySelector('.id').innerText);
        let task = taskManager.getTaskById(taskId); 
        task.task.status = "Completed";
        //console.log(task)    
    }
    taskManager.render();
    
});

//validates the input task name
const validFormFieldInput = (data) => {
    if(newTaskNameInput.value.length < 5) {
        newTaskNameInput.classList.add('is-invalid');
        newTaskNameInput.classList.remove('is-valid')
    } else {
        newTaskNameInput.classList.add('is-valid');
        newTaskNameInput.classList.remove('is-invalid')
    }
    data.preventDefault();
}
newTaskValue.addEventListener('click', validFormFieldInput); 

//validates the input description
const validDescription = (data) => {
    if(newTaskValue.value.length < 5) {
        newTaskValue.classList.add('is-invalid');
        newTaskValue.classList.remove('is-valid')
    } else {
        newTaskValue.classList.add('is-valid');
        newTaskValue.classList.remove('is-invalid')
    }
    data.preventDefault();
    assignedTo = document.querySelector("#mobility").value
}
assigned.addEventListener('click', validDescription); 



categoryName.addEventListener('click', (event) => {
    event.preventDefault();
    categoryName = document.querySelector('#category1').value;
    })

//validates the email format

newTaskEmail.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailIsValid(newTaskEmail.value)) {
        newTaskEmail.classList.add('is-valid');
        newTaskEmail.classList.remove('is-invalid');
    } 
    else {
    newTaskEmail.classList.add('is-invalid');
    newTaskEmail.classList.remove('is-valid');
    }
});

// compares the email input format and returns true/false
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
};

//validates that the input date is later than today
newStatus.addEventListener('click', (event) => {
    event.preventDefault();
    let Test = comparison(getDate(), newTaskDate.value);
    if (Test) {
        newTaskDate.classList.add('is-valid');
        newTaskDate.classList.remove('is-invalid');
        
    }
    else {
        newTaskDate.classList.add('is-invalid');
        newTaskDate.classList.remove('is-valid');
    }
    newStatus1 = document.querySelector('#menu').value;
    //console.log(newStatus1)
});
//get the date of today and format it in yyyy-mm-dd
const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today;
    }
// console.log(getDate())
//compare the date of today with the input date in the format yyyy-mm-dd
const comparison = (today, newTaskDate) => {
    if(newTaskDate >= today) {
        return true;
    }
    else {
        return false;
    }        
}

// function gettheDate(date) {
//     if (date.select) {
//       $('#date').pickadate().pickadate('picker').close();
//     }
//   }

//clears the form
const clearFormFields = () => {
    newTaskNameInput.value = "";
    newTaskValue.value = "";
    assigned.value = "";
    newTaskEmail.value = "";
    newStatus.value = "in progess";
    newTaskDate.value = "";
    newTaskNameInput.classList.remove("is-valid");
    newTaskValue.classList.remove("is-valid");
    assigned.classList.remove("is-valid");
    newTaskEmail.classList.remove('is-valid')
    newStatus.classList.remove("is-valid");
    newTaskDate.classList.remove("is-valid");
  };
  

  clearTask.addEventListener('click', () => {
      localStorage.clear();
      taskManager.clear();
      taskManager.render();
  })