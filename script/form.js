// export {formElement, formInputElements};

function form_isInputEmpty (inputId) {
    // get form element's value and make sure it's string
    const value = String(document.querySelector(`#${inputId}`).value)
    // check if this form element is empty
    if (!value) {
        return true;
    } else {
        return false;
    }
}

function form_isRequired (inputId) {
    // get parent element
    const formElement = document.querySelector(`#${inputId}`).parentElement
    return formElement.classList.contains(`form__element--required`)
}

function form_validateInput (inputId) {
    // debugger;
    // get form element's classes and check if it is email field
    const isEmail = document.querySelector(`#${inputId}`).classList.contains(`form__input-email`)
    const isPassword = document.querySelector(`#${inputId}`).type === `password`

    // if the field is empty
    if (form_isInputEmpty(inputId)) {
        console.log(`field is empty`)
        // check if the field is required
        if (form_isRequired(inputId)) {
            console.log(`field is empty and required`)
            form_showErrorMsg(inputId, 'This field is required')
        }
    // if there is any value
    } else {
        form_hideErrorMsg(inputId)
        // check if it is an email field
        if(isEmail) {
            console.log(`Starting email validation`);
            form_validateEmail(inputId);
        }
        // check if it is a password field
        if(isPassword) {
            console.log(`Starting password validation`);
            form_validatePassword(inputId);
        }
    }
}

function form_validateEmail (inputId) {
    // debugger;
    // get form element's value and make sure it's string
    const value = String(document.querySelector(`#${inputId}`).value)
    // check if provided email is valid
    if (/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})$/
    .test(value)){
        console.log(`email is valid`)
        form_hideErrorMsg(inputId)
    } else {
        console.log(`email is invalid`)
        form_showErrorMsg(inputId, `Email address is invalid`)
    }
}

function form_validatePassword (inputId) {
    // debugger;
    // get form element's value and make sure it's string
    const value = String(document.querySelector(`#${inputId}`).value)
    // check if provided password is valid:
    // 6-20 characters; at least one: A-Z, a-z, 0-9, special character
    if (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{6,20}$/
    .test(value)){
        console.log(`password is valid`)
        form_hideErrorMsg(inputId)
        // check other password fields for matching password
        form_confirmPassword(inputId)
    } else {
        console.log(`password is invalid`)
        form_showErrorMsg(inputId, `Password must be 6-20 characters long, have at least one uppercase letter, lowercase letter, digit and a special character`)
    }
}

function form_confirmPassword (inputId) {
    const validatedPassword = String(document.querySelector(`#${inputId}`).value)
    // select all form's input-password elements
    const formInputPasswordElements = document.querySelectorAll(`.form__element > input[type=password]`)

    formInputPasswordElements.forEach((element) => {
        if (element.value !== validatedPassword) {
            console.log(`passwords do not match`)
            form_showErrorMsg(element.id, `Passwords do not match`)
        } else {
            console.log(`passwords match`)
            form_hideErrorMsg(element.id)
        }
    })
}

function form_showErrorMsg (inputId, message) {
    // get message <span> for this form element
    const messageElement = document.querySelector(`#${inputId} + span.form__error-msg`)
    // add message text
    messageElement.textContent = String(message)
    // activate message
    messageElement.classList.add(`form__error-msg--active`)
}

function form_hideErrorMsg (inputId) {
    // get message <span> for this form element
    const messageElement = document.querySelector(`#${inputId} + span.form__error-msg`)
    // deactivate message
    messageElement.classList.remove(`form__error-msg--active`)
}

// select all form's input/textarea elements
const formInputElements = document.querySelectorAll(`.form__element > input, .form__element > textarea`)
// add event listener for each
formInputElements.forEach((element) => {
    // when one of these elements loses focus...
    element.addEventListener('blur', (e) => {
        // get element's id and validate its value
        form_validateInput(e.target.id);
        // console.log(`field has been validated`)
    })
})

const formElement = document.querySelector(`form#form`)
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
})