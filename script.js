let confirm = document.querySelector('.confirm');
let formdata = document.querySelector('#formData');
let thankYou = document.querySelector('.thankYou');
let continue = document.querySelector('.continue');



confirm.addEventListener('click', () => {
    formdata.classList.add('visibility');
    thankYou.classList.remove('visibility');

});