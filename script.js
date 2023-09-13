const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");
const finishButton = document.getElementById("finish-button");
const back3 = document.getElementById("back3");


next1.addEventListener("click", function(){change(form1,form2,)});
back2.addEventListener("click", function(){change(form2,form1)});
next2.addEventListener("click", function(){change(form2,form3)});
back3.addEventListener("click", function(){change(form3,form2)});
finishButton.addEventListener("click",function(){finish(form3)});


function change(firstElement, secondElement){
    /*
    if(validateForm(firstElement)){
        firstElement.classList.remove("form-step-active");
        secondElement.classList.add("form-step-active");
    }*/
    /*firstElement.submit();*/
    firstElement.classList.remove("form-step-active");
    secondElement.classList.add("form-step-active");
}

function finish(form){
    /*form.submit();*/
    alert("FINISHED")
}
/*
function validateForm(form){
    const inputElements = form.getElementsByTagName("input");
    let valid = false;
    for (const element of inputElements){
        if(element.value == ""){
            valid = false;
        } else{
            valid = true;
        }
    }
    return valid;
}
*/