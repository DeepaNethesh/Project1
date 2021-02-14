const taskManager = new TaskManager(0);

let form = document.querySelector('#taskForm')
let newTaskNameInput = document.querySelector("#staticname");
let newTaskValue = document.querySelector('#exampleTextarea1');
let assigned = document.querySelector('#assigned');
let newTaskEmail = document.querySelector('#staticEmail');
let newTaskDate = document.querySelector('#date');
let getName = document.querySelector('#mobility');
// console.log(getName.innerHTML)
let newStatus = document.querySelector('#menu');
let newStatus1;
let assignedTo;
let categoryName = document.querySelector('#category1');
console.log(categoryName)

// console.log(getName.innerText)


// let taskHtml = createTaskHtml('modify css', 'hghjhjhj', 'Renuka', '20/02/2021', 'started');
// console.log(taskHtml)
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

// console.log(newTaskNameInput.value)
// console.log(validFormFieldInput())

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

// const validEmail = (data) => {
//     if(newTaskEmail.value.length < 5) {
//         newTaskEmail.classList.add('is-invalid');
//         newTaskEmail.classList.remove('is-valid')
//     } else {
       
//         newTaskEmail.classList.add('is-valid');
//         newTaskEmail.classList.remove('is-invalid')
//     }
//     data.preventDefault();
// }
// newTaskDate.addEventListener('click', validEmail); 


categoryName.addEventListener('click', (event) => {
    event.preventDefault();
    categoryName = document.querySelector('#category1').value;
    })




function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };
  newTaskEmail.addEventListener('click', (event) => {
event.preventDefault();
if (emailIsValid(newTaskEmail.value)) {
    newTaskEmail.classList.add('is-valid');
    newTaskEmail.classList.remove('is-invalid');
} else {
    newTaskEmail.classList.add('is-invalid');
    newTaskEmail.classList.remove('is-valid');
        }
    })
// console.log("email:  " + newTaskEmail.value)
// console.log(emailIsValid(newTaskEmail.value))});

// function myFunction() {
//     let items = document.getElementById("items.value")
// const validDate = () => {
//     if(newTaskNameInput.value.length < 5) {
//         newTaskNameInput.classList.add('is-invalid');
//         newTaskNameInput.classList.remove('is-valid')
//     } else {
//         newTaskNameInput.classList.add('is-valid');
//         newTaskNameInput.classList.remove('is-invalid')
//     }
//     data.preventDefault();
// }
// newTaskValue.addEventListener('click', validFormFieldInput); 



   // console.log("email:  " + newEmailInput.value)
    //console.log(emailIsValid(newEmailInput.value))
    // console.log("date:  " + newTaskDate.value);

    // getName.addEventListener('click', (data) => {
    //     data.preventDefault();
    //     for ( let i = 0; i < getName.options.length; i++ ) {
    //         if ( getName.options[i].value == data ) {
    //             getName.options[i].selected = true;
    //            console.log(getName.options[i]);
    //         }
    //     }
        // })
      
       
      


    const getDate = () => {
   let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
   return today;
    }
// console.log(getDate())


function gettheDate(date) {
    if (date.select) {
      $('#date').pickadate().pickadate('picker').close();
    }
  }

//   const newDate = (date) => {
//       let d1 = newTaskDate.value;
//       let d2 = getDate(date);
//       console.log(d1)
//       if(d1 !== "" && d1 > d2) {
//           return date;
//           } else {
//               return 'invalid date'
//           }
//       }
//       newStatus.addEventListener('click', newDate)

    //   newStatus.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     if (newTaskDate.value) {
    //         newTaskDate.classList.add('is-valid');
    //         newTaskDate.classList.remove('is-invalid');
    //         if (newTaskDate.value > getDate(date)) {
    //             return date
    //         }      
    //     else {
    //         newTaskDate.classList.add('is-invalid');
    //         newTaskDate.classList.remove('is-valid');    
    //     }
    //     console.log(newTaskDate.value)
    //     }
    // })


    //   newStatus.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     if (d1.value && d1.value > d2) {
    //         d1.classList.add('is-valid');
    //         d1.classList.remove('is-invalid');
    //     }
    //     else {
    //         d1.classList.add('is-invalid');
    //         d1.classList.remove('is-valid');    
    //     }
    //     console.log(d1.value)
        
    // })

 
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
            console.log(newStatus1)
    })
//this function is to get the date of today            
// const getDate = () => {
//     let today = new Date();
//         let dd = String(today.getDate()).padStart(2, '0');
//         let mm = String(today.getMonth() + 1).padStart(2, '0'); 
//         let yyyy = today.getFullYear();
//         today = yyyy + '-' + mm + '-' + dd;
//     return today;
//         }
//this function compare the date of today with the input date
const comparison = (today, newTaskDate) => {
    if(newTaskDate >= today) {
        //console.log("correcto");
        return true;
    }
    else {
        //console.log("viejo");
        return false;
    }        
    console.log(Test);
}


//    let q = getDate();
//    let m = q.getMonth()+1;
//    var d = q.getDay();
//    var y = q.getFullYear();
   
//    var date = new Date(y,m,d);
   
//    mydate=new Date('2011-04-11');
//    console.log(date);
//    console.log(mydate)
   
//    if(date>mydate)
//    {
//        alert("greater");
//    }
//    else
//    {
//        alert("smaller")
//    }
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
      taskManager.render();
      console.log(taskManager)
      clearFormFields();
      
      });

      let toDoList = document.querySelector("#taskList")

      toDoList.addEventListener('click', (event) => { 
         if(event.target.classList.contains('done-button')) {
           let parentTask = event.target.parentElement.parentElement;
           console.log(parentTask)
           let taskId = Number(parentTask.querySelector('.id').innerText);
            let task = taskManager.getTaskById(taskId) 
        //   console.log(taskId)
             console.log(task)
             task.task.status = "Completed"
             console.log(task)
             
        }
        taskManager.render();
    });

    // console.log(taskManager.getTaskById(0))