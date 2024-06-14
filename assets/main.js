var headerRegisterBtn = document.getElementById('header__register')
var headerLoginBtn = document.getElementById('header__log-in-btn')
var modal = document.querySelector('.modal')
var registerForm = document.querySelector('#register')
var logInForm = document.querySelector('#log-in')
var switchLoginBtn = document.getElementById('auth-form__switch-btn-login')
var switchRegisterBtn = document.getElementById('auth-form__switch-btn-register')
console.log(switchLoginBtn)
console.log(window.getComputedStyle(logInForm).display)
headerRegisterBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    logInForm.style.display = 'none'
    registerForm.style.display = 'block'
})

headerLoginBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    registerForm.style.display = 'none'
    logInForm.style.display = 'block'
})
modal.onclick = (e) => {
    if (e.target.closest(".auth-form__controls-back")) {
        modal.style.display = 'none'
    }
}
var modalOverlay = document.querySelector('.modal__overlay')
modalOverlay.onclick = () => {
    modal.style.display = 'none'
}
switchLoginBtn.onclick = () => {
    registerForm.style.display = 'none'
    logInForm.style.display = 'block'
}

switchRegisterBtn.onclick = () => {
    logInForm.style.display = 'none'
    registerForm.style.display = 'block'
}