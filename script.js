const multiForm = document.getElementById("form");
const forms = [...multiForm.querySelectorAll("div.div-form")];
console.log(forms);

let formcounter = 0;

multiForm.addEventListener("click", event =>{

    const inputElements = [...forms[formcounter].querySelectorAll("input")];
    
    if(event.target.matches("[next]") && checkValidity(inputElements) && checkPass(inputElements)){
        formcounter += 1;
    } else if(event.target.matches("[previous]")){
        formcounter -= 1;
    } else if(event.target.matches("#finish-button") && checkValidity(forms)){
        alert("FINISHED");
        multiForm.submit();
        
    } else return
    
    updateForm(formcounter);
})

function updateForm(counter){
    forms.forEach(form => {
        if(form.classList.contains("form-step-active")){
            form.classList.remove("form-step-active");
        }
         forms[counter].classList.add("form-step-active");
    });
}

function checkValidity(inputElements){
    const allValid = inputElements.every(input => input.reportValidity());
    
    console.log(allValid);
    return allValid;
}

function checkPass(inputElements){
    
    let passwordValue = "";
    let repeatPassValue = "nopass";
    let repeatPassElement;
    let index = 0;
    for (const input of inputElements){
        if(input.name === "password"){
            passwordValue  = input.value;
        } else if(input.name === "repeat-pass"){
            repeatPassElement = input;
            repeatPassValue = input.value;
            index = inputElements.indexOf(input);
        }
    }

    if (repeatPassValue === "nopass"){
        return true;
    }
    let valid = (passwordValue === repeatPassValue);
    console.log(passwordValue);
    console.log(repeatPassValue);
    
    console.log(repeatPassElement);
    if(valid && repeatPassElement != undefined){
        inputElements[index].classList.add("valid");
        repeatPassElement.setCustomValidity("");
        
    } else{
        inputElements[index].classList.add("invalid");
        repeatPassElement.setCustomValidity("Password do not match!");
        
    }

    repeatPassElement.reportValidity();
    return valid;

}
