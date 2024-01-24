let prevScrollPosition = window.scrollY

const elementBody = document.querySelector('body')
const elementBtnNavMobile = document.querySelector('.header--btn-nav-mobile')
const elementBtnCloseNavMobile = document.querySelector('.header--nav .close-btn')
const elementBtnSearch = document.querySelector('.header--btn-search')
const elementBtnCloseFormSearch = document.querySelector('.header--form-search .close-btn')

//hide header when scroll
window.addEventListener('scroll', () => {
    let currScrollPosition = window.scrollY

    if(window.scrollY > 250) {
        if (prevScrollPosition < currScrollPosition) {
            elementHeader.classList.add('hide-header-top')
        } else {
            elementHeader.classList.remove('hide-header-top')
        }

        prevScrollPosition = currScrollPosition
    }
})

//toggle main nav mobile
elementBtnNavMobile.addEventListener('click', () => {
    elementBody.classList.add('show-nav-mobile')
})

elementBtnCloseNavMobile.addEventListener('click', () => {
    elementBody.classList.remove('show-nav-mobile')
})

//toggle form search
elementBtnSearch.addEventListener('click', () => {
    elementBody.classList.add('show-form-search')
})

elementBtnCloseFormSearch.addEventListener('click', () => {
    elementBody.classList.remove('show-form-search')
})