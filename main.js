let btnSub = document.getElementById('btnSubscribe');
let emailInput = document.getElementById('YourMail');
let ValidMailSpan = document.getElementById('validMail');
let result = document.getElementById('mailResult')

btnSub.addEventListener('click', (e) => {
    e.preventDefault();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
        showThankYouMessage();
        ValidMailSpan.classList.add('hidden')
        emailInput.classList.remove('border-[#ff6257]', 'bg-red-100')
        result.innerText = emailInput.value
    } else {
        ValidMailSpan.classList.remove('hidden');
        emailInput.classList.add('border-[#ff6257]', 'bg-red-100');
    }
});

function showThankYouMessage() {
    let modalElement = document.getElementById('myModal');
    modalElement.classList.remove('hidden');
    modalElement.classList.add('fixed');
}

function dismissMessage() {
    let modalElement = document.getElementById('myModal');
    modalElement.classList.remove('fixed');
    modalElement.classList.add('hidden');
    emailInput.value = ""; // Limpa o campo de email
}