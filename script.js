const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const previous2 = document.getElementById("previous2");
const finishButton = document.getElementById("finish-button");
const previous3 = document.getElementById("previous3");



next1.addEventListener("click", function(){change(form1,form2,)});
previous2.addEventListener("click", function(){change(form2,form1)});
next2.addEventListener("click", function(){change(form2,form3)});
previous3.addEventListener("click", function(){change(form3,form2)});
finishButton.addEventListener("click",function(){finish(form3)});


function change(firstElement, secondElement){

    const inputElements = [...firstElement.getElementsByTagName("input")];
    const allValid = inputElements.every(input=> input.reportValidity());
    if(allValid){
        firstElement.classList.remove("form-step-active");
        secondElement.classList.add("form-step-active");
    }

}

function finish(form){
    /*form.submit();*/
    alert("FINISHED")
}
