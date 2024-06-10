var headerRegisterBtn = document.getElementById('header__register')
var headerLoginBtn = document.getElementById('header__log-in-btn')
var modal = document.querySelector('.modal')
var registerForm = document.querySelector('#register')
var logInForm = document.querySelector('#log-in')
console.log(window.getComputedStyle(logInForm).display)
headerRegisterBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    registerForm.style.display = 'block'
    logInForm.style.display = 'none'
})

headerLoginBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    logInForm.style.display = 'block'
    registerForm.style.display = 'none'
})
modal.onclick = (e) => {
    if (e.target.closest(".auth-form__controls-back")) {
        modal.style.display = 'none'
    }
}