const btnNavMobile = document.querySelector('.btn-nav-mobile')
const body = document.querySelector('body')

//toogle nav mobile
btnNavMobile.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.toggle('show-nav-mobile')
})