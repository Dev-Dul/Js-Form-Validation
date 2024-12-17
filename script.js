const inputs = document.getElementsByTagName("input");
const errs = document.querySelectorAll(".error");
const form = document.getElementById("form");

Array.from(inputs).forEach((input, index) => {
    input.addEventListener("input", () => {
        form.classList.add("active");
        if(input.validity.valid){
            let error = errs[index];
            error.textContent = '';
            error.classList.remove("active");
        }else{
            showError(input, index);
        };
    });
});

Array.from(inputs).forEach((input, index) => {
    input.addEventListener("change", () => {
        if(input.validity.valid){
            input.style.borderColor = "#0af";
        }else{
            showError(input, index);
        }
        input.classList.add("jump");
    });
});


function showError(input, index){
    console.log("showError called");
    if(input.type === "text" && index === 0){
        nameError(input, index);
    }else if(input.type === "email"){
        mailError(input, index)
    }else if(input.type === "text" && index != 0){
        countryError(input, index);
    }else if(input.type === "number"){
        zipError(input, index);
    }else if(input.type === "password"){
        pwordError(input, index);
    }
}


function nameError(element, index){
    if(element.validity.valueMissing){
        errs[index].textContent = 'Name cannot be blank.';
    }else if(element.validity.typeMismatch){
        errs[index].textContent = 'Value has to be text.';
    }
    errs[index].classList.add("active");   
}


function mailError(element, index){
    if(element.validity.valueMissing){
        errs[index].textContent = 'You need to enter an email address.';
    }else if(element.validity.typeMismatch){
        errs[index].textContent = 'Entered value has to be an email address.';
    }else if(element.validity.tooShort){
        errs[index].textContent = `Email should be at least ${input.minLength} characters, you entered ${input.value.length}`;
    }
    errs[index].classList.add("active");  
}


function countryError(element, index){
    if(element.validity.valueMissing){
        errs[index].textContent = 'Country name is required.';
    }else if(element.validity.typeMismatch){
        errs[index].textContent = 'Entered value has to be text.';
    }
    errs[index].classList.add("active");  
}


function zipError(element, index){
    if(element.validity.valueMissing){
        errs[index].textContent = 'Zip Code is required.';
    }else if(element.validity.typeMismatch){
        errs[index].textContent = 'Value has to be in digits.';
    }else if(element.validity.rangeUnderflow){
        errs[index].textContent = `Value is too short, should be at least 5 characters`;
    }else if(element.validity.rangeOverflow){
        errs[index].textContent = `Value is too long, should not exceed tens of thousands`;
    }
    errs[index].classList.add("active");  
}


function pwordError(element, index){
    if(element.validity.valueMissing){
        errs[index].textContent = 'Password is required.';
    }else if(element.validity.typeMismatch){
        errs[index].textContent = 'Enter a valid password.';
    }else if(element.validity.tooShort){
        errs[index].textContent = `Value is too short, should be at least ${element.minLength} characters`;
    }else if(element.validity.tooLong){
        errs[index].textContent = `Value is too long, should be at most ${element.maxLength} characters`;
    }
    errs[index].classList.add("active");  
}

