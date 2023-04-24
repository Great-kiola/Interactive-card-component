let confirm = document.querySelector('.confirm');
let formdata = document.querySelector('#formData');
let thankYou = document.querySelector('.thankYou');
let back = document.querySelector('.continue');


let cardInput = document.querySelector('#cardHolder');
let cardNumber = document.querySelector('#cardNumber');
let cvcInput = document.querySelector('#cvc');

let cardNo = document.querySelector('#number');
let customerName = document.getElementById('name');
let expiry = document.getElementById('exp');
let cvc = document.querySelector('.cvc');


cardInput.addEventListener("input", () => {
    customerName.innerHTML = cardInput.value;
})

cardNumber.addEventListener("input", () => {
    cardNo.innerHTML = cardNumber.value;
});

cvcInput.addEventListener("input", () => {
    cvc.innerHTML = cvcInput.value;
});


confirm.addEventListener('click', () => {
    formdata.classList.add('visibility');
    thankYou.classList.remove('visibility');

});

back.addEventListener('click', () => {
    formdata.classList.remove('visibility');
    thankYou.classList.add('visibility');
});