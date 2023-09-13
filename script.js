const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

next1.onclick = function(){
    form1.classList.remove("form-step-active");
    form2.classList.add("form-step-active");
}