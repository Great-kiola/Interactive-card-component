let confirm = document.querySelector('.confirm');
let formdata = document.querySelector('#formData');
let thankYou = document.querySelector('.thankYou');
let back = document.querySelector('.continue');


let cardInput = document.querySelector('#cardHolder');
let cardNumber = document.querySelector('#cardNumber');
let cvcInput = document.querySelector('#cvc_number');
let monthsInput = document.querySelector('.monthsInp');
let yearsInput = document.querySelector('.yearsInp');

let cardNo = document.querySelector('#number');
let customerName = document.getElementById('name');
let expMnths = document.querySelector('.months');
let expYrs = document.querySelector('.years');
let cvc = document.querySelector('.cvc');

confirm.addEventListener("click", handleSubmit);
cardNumber.addEventListener("input", setCardNumber);


function setCardNumber(e){
    cardNo.innerText = format(e.target.value);
}

cardInput.addEventListener("input", () => {
    customerName.innerHTML = cardInput.value;
})

cvcInput.addEventListener("input", () => {
    cvc.innerHTML = cvcInput.value;
});

monthsInput.addEventListener("input", () => {
    expMnths.innerHTML = monthsInput.value;
});

yearsInput.addEventListener("input", () => {
    expYrs.innerHTML = yearsInput.value;
});

function handleSubmit(e){
    e.preventDefault();

    if (!cardInput.value){
        cardInput.classList.add('error');
        cardInput.parentElement.classList.add("error_message");
    } else {
        cardInput.classList.remove('error');
        cardInput.parentElement.classList.remove("error_message");
    }

    if (!cardNumber.value){
        cardNumber.classList.add('error');
        cardNumber.parentElement.classList.add("error_message");
    } else {
        cardNumber.classList.remove('error');
        cardNumber.parentElement.classList.remove("error_message");
    }

    if (!cvcInput.value){
        cvcInput.classList.add('error');
        cvcInput.parentElement.classList.add("error_message");
    } else {
        cvcInput.classList.remove('error');
        cvcInput.parentElement.classList.remove("error_message");
    }

    if (!monthsInput.value){
        monthsInput.classList.add('error');
        monthsInput.parentElement.classList.add("error_message");
    } else {
        monthsInput.classList.remove('error');
        monthsInput.parentElement.classList.remove("error_message");
    }

    if (!yearsInput.value){
        yearsInput.classList.add('error');
        yearsInput.parentElement.classList.add("error_message");
    } else {
        yearsInput.classList.remove('error');
        yearsInput.parentElement.classList.remove("error_message");
    }


    if (cardInput.value&&cardNumber.value&&cvcInput.value&&monthsInput.value&&yearsInput.value){
        formdata.classList.add("visibility");
        thankYou.classList.remove('visibility');
    }
}





function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

back.addEventListener('click', () => {
    formdata.classList.remove('visibility');
    thankYou.classList.add('visibility');
});