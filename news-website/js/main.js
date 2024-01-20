let prevScrollPosition = window.scrollY
const elementHeader = document.querySelector('.header')

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