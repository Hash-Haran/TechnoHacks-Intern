const formContainer= document.querySelector(".form_register")
const formElement = document.getElementById('registrationForm');
const message= document.querySelector(".text_message")
const container=document.querySelector(".container")
console.log(formContainer)

formContainer.addEventListener("submit",(e)=>{
    e.preventDefault();
    const formData = new FormData(formElement);
    console.log("Registered")
    const name= formData.get('name')
    const email=formData.get("email")
    const password= formData.get("password")
    const phNo= formData.get("number")
    const confirmpassword=formData.get("confirmPassword")
    
    if(phNo.length > 10)
    {
        alert("Please Enter the Correct Phone Number")
        return
    }
    if(password != confirmpassword)
    {
        alert("Password does not Match")
        return
    }
        
    console.log(name,email,password, phNo,confirmpassword)

    container.classList.add("hid")
    message.classList.remove("hid")
    container.classList.add("h1.hid")
    container.classList.remove("h1.hid")
})

