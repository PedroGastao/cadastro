let email = document.getElementById('email');

email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity("campo obrigatorio");
        email.reportValidity();
    }else{
        email.setCustomValidity("");
    }
})