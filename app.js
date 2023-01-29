const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const subject = document.getElementById('subject');
const evaluation = document.getElementById('evaluation');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const dateValue = date.value.trim();
    const subjectValue = subject.value.trim();
    const evaluationValue = evaluation.value.trim();


    if(usernameValue === '') {
        setError(username, 'Please enter full name!');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Please enter email!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address!');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Please enter phone!');
    }  else {
        setSuccess(phone);
    }

    if(dateValue === '') {
        setError(date, 'Please enter date on which you want to fix meeting!');
    }else {
        setSuccess(date);
    }

    

    if(subjectValue === '') {
        setError(subject, 'Please enter subject!');
    }else {
        setSuccess(subject);
    }

    if(evaluationValue === '') {
        setError(evaluation, 'Please enter evaluation!');
    } else if (evaluationValue !== '50'){
        setError(evaluation, 'Please enter correct evaluation!');
    }else {
        setSuccess(evaluation);
    }

};
 function sendMail(){
    var params = {
        name:document.getElementById('username').value,
        email :document.getElementById('email').value,
        phone :document.getElementById('phone').value,
        date :document.getElementById('date').value,
        subject : document.getElementById('subject').value,
        evaluation : document.getElementById('evaluation').value

    }
const serviceID = ""; //service ID
const templateID = ""; //template ID

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("username").value = " "
        console.log(res);
        alert("message sent ")
    }
).catch((err) => console.log(err))
}



