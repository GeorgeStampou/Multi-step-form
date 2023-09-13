const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back2 = document.getElementById("back2");

next1.onclick = function(){
    form1.classList.remove("form-step-active");
    form2.classList.add("form-step-active");
}

back2.onclick = function(){
    form2.classList.remove("form-step-active");
    form1.classList.add("form-step-active");
}