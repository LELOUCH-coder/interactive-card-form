 /* form validation */

 const form = document.querySelector(".form-section");



const username=document.querySelector(".username");
const usernameError=document.querySelector(".username-error");

//desktop
const userDes=document.querySelector(".username-des");
const usernameErrorDes=document.querySelector(".username-error-des");

//mobile
const id=document.querySelector(".id-no");
const idError=document.querySelector(".id-error");

//desktop
const idDes=document.querySelector(".id-no-des");
const idErrorDes=document.querySelector(".id-error-des");


//mobile
const dob=document.querySelector(".dob");
const dobError=document.querySelector(".dd-error");


//desktop
const dobDes=document.querySelector(".dob-des");
const dobErrorDes=document.querySelector(".dd-error-des");



//mobile
const month=document.querySelector(".mm");
const monthError=document.querySelector(".month-error");


//desktyop
const monthDes=document.querySelector(".mm-des");
const monthErrorDes=document.querySelector(".month-error-des");

const year=document.querySelector(".yy");
const yearError=document.querySelector(".year-error");

//desktop
const yearDes=document.querySelector(".yy-des");
const yearErrorDes=document.querySelector(".year-error-des");

const cvc=document.querySelector(".dd");
const cvcError=document.querySelector(".cvc-error");

//desktop
const cvcDes=document.querySelector(".dd-des");
const cvcErrorDes=document.querySelector(".cvc-error-des");


    const nameElement = document.querySelector(".name");
    const idElement = document.querySelector(".id");
    const dateElement = document.querySelector(".date");
    const cvcElement = document.querySelector(".cvc");







//reset
function resetForm() {
  form.reset();
}

let isFormValid=false;
// Call the resetForm function when the page is loaded
window.onload = resetForm;

// Ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector(".form-section");

    // Add event listener to the form
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Define regular expressions
        let nameRegex = /^[a-zA-Z ,.'-]+$/;
        let cardNumberRegex = /^[0-9\s]+$/;

        // Username validation
        if (username.value.trim() === "") {
            username.parentElement.className = "same-line error";
            usernameError.innerHTML = "Please enter a username";
        } else if (!nameRegex.test(username.value.trim())) {
            username.parentElement.className = "same-line error";
            usernameError.innerHTML = "Enter a valid name";
        } else {
            username.parentElement.className = "same-line";
            usernameError.innerHTML = ""; // Reset error message
        }

        // Card number validation
        if (id.value.trim() === "") {
            id.parentElement.className = "same-line error";
            idError.innerHTML = "Please enter a card number";
        } else if (!cardNumberRegex.test(id.value.trim())) {
            id.parentElement.className = "same-line error";
            idError.innerHTML = "Wrong format numbers only";
        } else {
            id.parentElement.className = "same-line";
            idError.innerHTML = ""; // Reset error message
        }

        // Month validation
        let monthValue = parseInt(month.value);
        if (month.value.trim() === "") {
            month.parentElement.className = "same-line error";
            monthError.innerHTML = "Please enter a month";
        } else if (isNaN(monthValue) || monthValue <= 0 || monthValue > 12) {
            month.parentElement.className = "same-line error";
            monthError.innerHTML = "Invalid month";
        } else {
            month.parentElement.className = "same-line";
            monthError.innerHTML = ""; // Reset error message
        }

        // Year validation
        let yearValue = year.value.trim();
        if (yearValue === "" || isNaN(yearValue) || yearValue.length !== 2) {
            year.parentElement.className = "same-line error";
            yearError.innerHTML = "Enter a valid 2-digit year";
        } else {
            year.parentElement.className = "same-line";
            yearError.innerHTML = ""; // Reset error message
        }
		
		
		
		//for cvc
        let cvcVal = cvc.value.trim();
        if(cvcVal===""){
			cvc.parentElement.className="same-line error";
		} else {
            cvc.parentElement.className = "same-line";
            cvcError.innerHTML = ""; // Reset error message
        }

 const usernameValue = username.value.trim();
        const idValue = id.value.trim();
        const mmValue = month.value.trim();
        const yyValue = year.value.trim();
        const cvcValue = cvc.value.trim();

        // Update elements with input values
        nameElement.textContent = usernameValue !== "" ? usernameValue : "Jane Apple"; // Default value if empty
        idElement.textContent = idValue !== "" ? idValue : "0000 0000 0000 0000"; // Default value if empty
        dateElement.textContent = `${mmValue !== "" ? mmValue : "00"}/${yyValue !== "" ? yyValue : "00"}`; // Default value if empty
        cvcElement.textContent = cvcValue !== "" ? cvcValue : "000"; // Default value if empty











    });
});



 const formDes = document.querySelector(".form-section-des");

//reset
function resetFormDes() {
  formDes.reset();
}

let isFormDesValid=false;
// Call the resetForm function when the page is loaded
window.onload = resetFormDes;

// Ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const formDes = document.querySelector(".form-section-des");

    // Add event listener to the form
    formDes.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting




/* for desktop */

 // Define regular expressions
        let nameRegex = /^[a-zA-Z ,.'-]+$/;
        let cardNumberRegex = /^[0-9\s]+$/;

 // Username validation
        if (userDes.value.trim() === "") {
            userDes.parentElement.className = "same-line error";
            usernameErrorDes.innerHTML = "Please enter a username";
        } else if (!nameRegex.test(userDes.value.trim())) {
            userDes.parentElement.className = "same-line error";
            usernameErrorDes.innerHTML = "Enter a valid name";
        } else {
            userDes.parentElement.className = "same-line";
            usernameErrorDes.innerHTML = ""; // Reset error message
        }

        // Card number validation
        if (idDes.value.trim() === "") {
            idDes.parentElement.className = "same-line error";
            idErrorDes.innerHTML = "Please enter a card number";
        } else if (!cardNumberRegex.test(idDes.value.trim())) {
            idDes.parentElement.className = "same-line error";
            idErrorDes.innerHTML = "Wrong format numbers only";
        } else {
            idDes.parentElement.className = "same-line";
            idErrorDes.innerHTML = ""; // Reset error message
        }

        // Month validation
        let monthValu = parseInt(monthDes.value);
        if (monthDes.value.trim() === "") {
            monthDes.parentElement.className = "same-line error";
            monthErrorDes.innerHTML = "Please enter a month";
        } else if (isNaN(monthValu) || monthValu <= 0 || monthValu > 12) {
            monthDes.parentElement.className = "same-line error";
            monthErrorDes.innerHTML = "Invalid month";
        } else {
            monthDes.parentElement.className = "same-line";
            monthErrorDes.innerHTML = ""; // Reset error message
        }

        // Year validation
        let yearValu = yearDes.value.trim();
        if (yearValu === "" || isNaN(yearValu) || yearValu.length !== 2) {
            yearDes.parentElement.className = "same-line error";
            yearErrorDes.innerHTML = "Enter a valid 2-digit year";
        } else {
            yearDes.parentElement.className = "same-line";
            yearErrorDes.innerHTML = ""; // Reset error message
        }
		
		
		
		//for cvc
        let cvcValu = cvcDes.value.trim();
        if(cvcValu===""){
			cvcDes.parentElement.className="same-line error";
		} else {
            cvcDes.parentElement.className = "same-line";
            cvcErrorDes.innerHTML = ""; // Reset error message
        }

/* for desktop */

  const nameEle = document.querySelector(".name-des");
    const idEle = document.querySelector(".id-des");
    const dateEle = document.querySelector(".date-des");
    const cvcEle = document.querySelector(".cvc-des");




const userVal = userDes.value.trim();
        const idVal = idDes.value.trim();
        const mmVal = monthDes.value.trim();
        const yyVal = yearDes.value.trim();
        const cvValue = cvcDes.value.trim();

        // Update elements with input values
        nameEle.textContent = userVal !== "" ? userVal : "Jane Apple"; // Default value if empty
        idEle.textContent = idVal !== "" ? idVal : "0000 0000 0000 0000"; // Default value if empty
        dateEle.textContent = `${mmVal !== "" ? mmVal : "00"}/${yyVal !== "" ? yyVal : "00"}`; // Default value if empty
        cvcEle.textContent = cvValue !== "" ? cvValue : "000"; // Default value if empty
		
		
    });
});