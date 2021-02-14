let newTaskNameInput = document.querySelector("#staticname");
let newTaskValue = document.querySelector('#exampleTextarea1');
let assigned = document.querySelector('#assigned');
let newTaskEmail = document.querySelector('#staticEmail');
let newTaskDate = document.querySelector('#date');
let getName = document.querySelector('#items');
let newStatus = document.querySelector('#menu');
//console.log(getName.innerText)

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
}
assigned.addEventListener('click', validDescription); 


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

function emailIsValid (email) { // compares the email input format and returns true/false
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
    //console.log(Test);
}

// function gettheDate(date) {
//     if (date.select) {
//       $('#date').pickadate().pickadate('picker').close();
//     }
// }



 
