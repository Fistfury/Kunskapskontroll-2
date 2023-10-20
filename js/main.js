let errorContainer = document.querySelector('#phone-book');
let contactList = document.getElementById('contact-list');
let deleteBtn = document.getElementById('delete-all-contacts');
let contactError = document.querySelector('.error-message');
let wrongInput = document.createElement('h3');
let contactContainer = document.getElementById('new-contact');
let inputName = document.getElementById('put-in-name-here');
let inputPhone = document.getElementById('put-in-number-here');
let createBtn = document.getElementById('create-new-contact'); 
let deleteContactList = document.getElementById('new-contact');

deleteBtn.addEventListener('click', deleteButton);
createBtn.addEventListener('click', createButton);

function clearError(name, phone) {
    contactError.innerHTML = '';
    name.style.border = 'none';
    phone.style.border ='none';
}

function inputWrong(message) {

    wrongInput.innerHTML ="";
    wrongInput.style.margin='0';
    wrongInput.style.color = 'red';
    wrongInput.innerText = message;
    contactError.append(wrongInput);
}

function checkInputs (name, phone) {

    if (name.value === '' && phone.value === '') {
        inputWrong('Put in name and number!');
        name.style.border = '5px solid red';
        phone.style.border ='5px solid red';
        return false;
    }
    else if (name.value === '') {
        inputWrong('Put in name');
        name.style.border = '5px solid red';
        phone.style.border ='none';
        return false;
    }
    else if (phone.value === '') {
        inputWrong('Put in number');
        phone.style.border ='5px solid red';
        name.style.border ='none';
        return false;
    }

    else {
        clearError(name, phone);
        return true;
    }

}
function deleteButton () {
    deleteContactList.innerHTML ="";
}

function inputDelete() {
    let contactItem = this.parentNode;
    contactItem.remove();
  }

function inputChange() {
    if (this.parentNode.children[0].disabled === true) {
        this.parentNode.children[0].disabled = false;
        this.parentNode.children[1].disabled = false;
        this.innerText ='Save';
    }
    else {
        if (checkInputs(this.parentNode.children[0], this.parentNode.children[1])) {
            this.parentNode.children[0].disabled = true;
            this.parentNode.children[1].disabled = true;
            this.innerText ='Change';
        }
    }


}

function createButton () {
   
    if( !checkInputs(inputName, inputPhone)) {
        return;
    }
    
    let newLi = document.createElement('li');

    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'name');
    nameInput.value = inputName.value;
    nameInput.disabled = true;

    let phoneInput = document.createElement('input');
    phoneInput.setAttribute('type', 'tel');
    phoneInput.setAttribute('class', 'phone');
    phoneInput.value = inputPhone.value;
    phoneInput.disabled = true;
    inputName.value = '';
    inputPhone.value ='';

    let newButtonChange  = document.createElement('button');
    newButtonChange.textContent = 'Change';
    newButtonChange.addEventListener('click', inputChange); 

   let newButtonDelete = document.createElement('button');
    newButtonDelete.textContent = 'Delete';
    newButtonDelete.addEventListener('click', inputDelete);

    newLi.append(nameInput, phoneInput,
         newButtonChange, newButtonDelete);

    contactContainer.append(newLi);
}




