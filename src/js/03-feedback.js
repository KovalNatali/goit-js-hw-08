
import throttle from 'lodash.throttle';

let formData = {};

const refs  = {
    formEl: document.querySelector(".feedback-form")
}
const LOCAL_KEY = "feedback-form-state";

window.addEventListener('load', fiilForm);
fiilForm();

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);


function fiilForm () {
   try {
       const saveMassege = localStorage.getItem(LOCAL_KEY);
       if (saveMassege) {
           formData = JSON.parse(saveMassege);
           Object.entries(formData).forEach(({key, value}) => refs.formEl.elements[key].value = formData(value))  
} 
} catch(error) {   
           console.log('Error');
        }
}

function onInput(event){
   formData[event.target.name] = event.target.value;
   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
   
}

function onFormSubmit(event) {
event.preventDefault();
console.log(formData);
formData = {};
refs.formEl.reset();
localStorage.removeItem(LOCAL_KEY);

}
