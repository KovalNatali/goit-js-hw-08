import throttle from 'lodash.throttle';

const formData = {};

const refs  = {
    formEl: document.querySelector(".feedback-form"),
    inputEl: document.querySelector('input'),
    textareaEl: document.querySelector('textarea'),
}
const LOCAL_KEY = "feedback-form-state";
fiilForm();

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);


function fiilForm () {
    const saveMassege = localStorage.getItem('feedback-form-state');
    if (saveMassege) {
        const saveArray = JSON.parse(localStorage.getItem('feedback-form-state'));
        refs.inputEl.value = saveArray.email;
        refs.textareaEl.value = saveArray.message;
    }
}

function onInput(event){
   formData[event.target.name] = event.target.value;
   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
     // console.log(event.target.value);
    // console.log(event.target.name);
}

function onFormSubmit(event) {
event.preventDefault();
console.log(formData);

refs.formEl.reset();
localStorage.removeItem(LOCAL_KEY);
}
