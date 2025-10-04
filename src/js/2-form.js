const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");




populateForm();

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit)

function onFormInput(event) {
    const value = event.target.value.trim();

    if (event.target.name === "email") {
        formData.email = value;
    }
     if (event.target.name === "message") {
        formData.message = value;
    }  
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData); 

        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";

    }
}

function onFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message){
        alert("Fill please all fields");
    return;
}

console.log(formData);


 event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
    
   formData = { email: "", message: "" }; 
}