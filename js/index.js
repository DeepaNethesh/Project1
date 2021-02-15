let form = document.querySelector('#taskForm')
let newTaskNameInput = document.querySelector("#staticname");
let newTaskValue = document.querySelector('#exampleTextarea1');
// let assigned = document.querySelector('#assigned');
let newTaskEmail = document.querySelector('#staticEmail');
let newTaskDate = document.querySelector('#date');
let getName = document.querySelector('#mobility');
let newStatus = document.querySelector('#status');
let newStatus1;
let assignedTo;
let categoryName = document.querySelector('#category1');
let clearTask = document.querySelector('#clearTask')
let validationFail = 0; // variable to validate input fields
let newCategory;

//creates the Task manager instance from the class
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();


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
    taskManager.save();
    
});

// toDoList.addEventListener('click', (event) => { 
//     if(event.target.classList.contains('edit')) {
//         let parentTask = event.target.parentElement.parentElement;
//         //console.log(parentTask)
//         let taskId = Number(parentTask.querySelector('.id').innerText);
//         let task = taskManager.getTaskById(taskId); 
//         task.task.status = "Completed";
//         //console.log(task)    
//     }
//     taskManager.render();
//     taskManager.save();
    
// });

//validates the Category
const validCategory = (data) => {
    if(categoryName.value === 'Select') {
        categoryName.classList.add('is-invalid');
        categoryName.classList.remove('is-valid')
        validationFail++;   
    } 
    else {
        categoryName.classList.add('is-valid');
        categoryName.classList.remove('is-invalid')
        newCategory = document.querySelector('#category1').value;   
    }
    data.preventDefault();
}
form.addEventListener('click', validCategory); 

//validates the Assigned to

const validAssignedTo = (data) => { 
    if(getName.value === 'Select') {
        getName.classList.add('is-invalid');
       getName.classList.remove('is-valid')
        validationFail++;
    } 
    else {
        getName.classList.add('is-valid');
        getName.classList.remove('is-invalid')
        assignedTo = document.querySelector('#mobility').value;  
    }
    data.preventDefault();
}

form.addEventListener('click', validAssignedTo); 

//validates the status

const validStatus = (data) => {
    if(newStatus.value === 'Select') {
        newStatus.classList.add('is-invalid');
        newStatus.classList.remove('is-valid')
        validationFail++;
    } 
    else {
        newStatus.classList.add('is-valid');
        newStatus.classList.remove('is-invalid')
        newStatus1 = document.querySelector('#status').value;
        
    }
    data.preventDefault();
}
form.addEventListener('click', validStatus); 

//validates the input task name
const validFormFieldInput = (data) => {
    if(newTaskNameInput.value.length < 5) {
        newTaskNameInput.classList.add('is-invalid');
        newTaskNameInput.classList.remove('is-valid')
        validationFail++;
        console.log(validationFail)
    } else {
        newTaskNameInput.classList.add('is-valid');
        newTaskNameInput.classList.remove('is-invalid')
    }
    data.preventDefault();
}
form.addEventListener('click', validFormFieldInput); 

//validates the input description
const validDescription = (data) => {
    if(newTaskValue.value.length < 5) {
        newTaskValue.classList.add('is-invalid');
        newTaskValue.classList.remove('is-valid')
        validationFail++;
    } 
    else {
        newTaskValue.classList.add('is-valid');
        newTaskValue.classList.remove('is-invalid')
    }
    data.preventDefault();
    //assignedTo = document.querySelector("#mobility").value
}
form.addEventListener('click', validDescription); 



// form.addEventListener('click', (event) => {
//     event.preventDefault();
//     categoryName = document.querySelector('#category1').value;
//     })

//validates the email format

form.addEventListener('click', (event) => {
    event.preventDefault();
    if (emailIsValid(newTaskEmail.value)) {
        newTaskEmail.classList.add('is-valid');
        newTaskEmail.classList.remove('is-invalid');
    } 
    else {
    newTaskEmail.classList.add('is-invalid');
    newTaskEmail.classList.remove('is-valid');
    validationFail++;
    }
});

// compares the email input format and returns true/false
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
};

//validates that the input date is later than today
form.addEventListener('click', (event) => {
    event.preventDefault();
    let Test = comparison(getDate(), newTaskDate.value);
    if (Test) {
        newTaskDate.classList.add('is-valid');
        newTaskDate.classList.remove('is-invalid');
        
    }
    else {
        newTaskDate.classList.add('is-invalid');
        newTaskDate.classList.remove('is-valid');
        validationFail++;
    }
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
//compare the date of today with the input date in the format yyyy-mm-dd
const comparison = (today, newTaskDate) => {
    if(newTaskDate >= today) {
        return true;
    }
    else {
        return false;
    }        
}



//add tasks when the user clics submit
form.addEventListener('click', (event) => {
    event.preventDefault();
    if(validationFail === 0) {//if the validation is ok add the task
        taskManager.addTask(
            newTaskNameInput.value,
            newTaskValue.value,
            assignedTo,
            newTaskEmail.value,
            newTaskDate.value,
            newStatus1,
            newCategory
        );
        //display list of tasks  
        taskManager.render();
        clearFormFields();  
        taskManager.save();
        document.querySelector(".submit").href = "#welcome";
    } 
    else {
        validationFail = 0;
        return;
    }
});

//clears the form
const clearFormFields = () => {
    newTaskNameInput.value = "";
    newTaskValue.value = "";
    getName.value = "Select";
    newTaskEmail.value = "";
    newStatus.value = "Select";
    newTaskDate.value = "";
    categoryName.value = "Select"
    newTaskNameInput.classList.remove("is-valid");
    newTaskValue.classList.remove("is-valid");
    getName.classList.remove("is-valid");
    newTaskEmail.classList.remove('is-valid')
    newStatus.classList.remove("is-valid");
    newTaskDate.classList.remove("is-valid");
    categoryName.classList.remove("is-valid")
};
  
//calling the method to clear the task list
clearTask.addEventListener('click', () => {
      localStorage.clear();
      taskManager.clear();
      taskManager.render();
});