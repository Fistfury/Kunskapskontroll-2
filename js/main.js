// The functions for the change button, the input/button delete and validation check.

function inputChange(newInput) {
    newInput.forEach(newInput => newInput.disabled = !newInput.disabled);
}
function inputDelete(newInput, newBtn) {
    newInput.forEach(newInput => newInput.remove());
    newBtn.forEach(newBtn => newBtn.remove());
}
function inputWrong(wrongInput) {
  wrongInput.textContent ='Put in name and number!';
  wrongInput.style.display ='block';
}
let errorContainer = document.querySelector('#phone-book');
let wrongInput = document.querySelector('.error-message');
let contactError = document.querySelector('#contact-list .error-message');
let contactList = document.getElementById('contact-list');

let deleteBtn = document.getElementById('delete-all-contacts');
deleteBtn.addEventListener('click', function(){
    let deleteContactList = document.getElementById('new-contact');
    deleteContactList.innerHTML ="";
})


let createBtn = document.getElementById('create-new-contact'); 
createBtn.addEventListener('click', function(e){
    e.preventDefault();
//    Create all the variables for the basic function
    let contactContainer = document.getElementById('new-contact');
    let inputName = document.getElementById('put-in-name-here');
    let inputPhone = document.getElementById('put-in-number-here');
    let valueName = inputName.value;
    let valuePhone = inputPhone.value;
    let newLi = document.createElement('li');
   
    newLi.classList.add('contact-list');

    inputName.style.border = 'none';
    inputPhone.style.border = 'none';
    wrongInput.style.display = 'none';
    wrongInput.textContent = '';

 

    
if (!valueName && !valuePhone) {
   inputWrong(wrongInput); 
   inputName.style.border = '5px solid red';
   inputPhone.style.border = '5px solid red';
//    wrongInput.style.textAlign = "center";
   errorContainer.appendChild(wrongInput);
     return;
}
if (!valueName) {
    inputWrong(wrongInput);
    wrongInput.textContent = ' Put in name';
    inputName.style.border = '5px solid red';
    errorContainer.appendChild(wrongInput);
    return;
}
if (!valuePhone) {
    inputWrong(wrongInput);
    wrongInput.textContent = ' Put in number';
    inputPhone.style.border = '5px solid red';
    errorContainer.appendChild(wrongInput);
    return;
}
// else if (!valueName && valuePhone) {
//     inputWrong(wrongInput);
//     wrongInput.textContent ='Put in name';
//     inputName.value = valueName;
//     inputName.style.border = "5px solid red";
//     return;
// }
// else if (valueName && !valuePhone) {
//     inputWrong(wrongInput);
//     wrongInput.textContent ='put in number';
//     inputPhone.style.border = "5px solid red";
//     return;
// }

    
// A for loop to make the two inputs and make it two diffrent types depending
// on the value.
    // for (let i = 0; i < 2; i++) {

    //     let newContact = document.createElement('input');
    //     newContact.setAttribute('type', ( i === 0) ? 'text' : 'tel' );
    //     newContact.value = (i === 0) ? valueName : valuePhone;
    //     newContact.style.flex
    //     newContact.disabled = true;
    //     newLi.appendChild(newContact);
    //     console.log(newContact);
        
    // }

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'name');
    nameInput.value =(valueName !== '') ? valueName : '';
    // nameInput.style.flex;
    nameInput.disabled = true;
    newLi.append(nameInput);
    console.log(nameInput);

    let phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('class', 'phone');
    phoneInput.value = (valuePhone !== '') ? valuePhone : '';
    // phoneInput.style.flex;
    phoneInput.disabled = true;
    newLi.append(phoneInput);
    console.log(phoneInput);
    inputName.value = '';
    inputPhone.value ='';
    
//    Makes two new button and naming them
    
   let newButtonChange  = document.createElement('button');
    newButtonChange.textContent = 'Change';
   let newButtonDelete = document.createElement('button');
    newButtonDelete.textContent = 'Delete';

    // appends it all to the new list

    newLi.append(newButtonChange, newButtonDelete);
    contactContainer.appendChild(newLi);
    console.log(createBtn);

    
// Lets the change button to remove the disable and able for edit.
    newButtonChange.addEventListener('click', function() {
        let newInput = newLi.querySelectorAll('input');
   
        if (nameInput.value === '' && phoneInput.value === '') {
            inputWrong(wrongInput);
            nameInput.style.border = "5px solid red";
            phoneInput.style.border = "5px solid red";
            contactError.append(wrongInput);
            return;
            
             }
             if (nameInput.value === '') {
                inputWrong(wrongInput);
                wrongInput.textContent = ' Put in name';
                nameInput.style.border = "5px solid red";
                contactError.append(wrongInput);
                return;
             }
             if (phoneInput.value =='') {
                inputWrong(wrongInput);
                wrongInput.textContent = ' Put in number';
                phoneInput.style.border ="5px solid red";
                contactError.append(wrongInput);
                return;
             }
            
             else {
                nameInput.style.border = 'none';
                phoneInput.style.border = 'none';
                wrongInput.style.display = 'none';
                wrongInput.textContent = '';
        inputChange(newInput);
        newButtonChange.textContent = (newButtonChange.textContent === 'Change')
        ? 'Save' : 'Change';
          }
       
          
});
// Let the new delete button to removes all of the inputs.
newButtonDelete.addEventListener('click', function(){
    newInput = newLi.querySelectorAll('input');
    let newBtn = newLi.querySelectorAll('button');
    inputDelete(newInput, newBtn);
    
})



});



