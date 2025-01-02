document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')

    //check if jquery is loaded
    if (typeof jQuery !== 'undefined') {
        //check if carousel plugin loaded
        if (typeof jQuery.fn.slick === 'function') {
            //hero banner slider
            jQuery('.hero-banner-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            })

            //lifestyle slider
            jQuery('.slider-sc-living').slick({
                slideToShow: 1,
                variableWidth: true,
                arrows: false
            })

            //thrive slider
            jQuery('.slider-sc-thrive').slick({
                slideToShow: 1,
                variableWidth: true,
                arrows: false
            })
        } else {
            console.error('Slick slider plugin is not loaded')
        }
    } else {
        console.error('JQuery is not loaded')
    }

    //toggle header scroll----------------------------------------------------------------------------------------------------
    function handleScroll() {
        // Check the scroll position
        const scrollPosition = window.scrollY || document.documentElement.scrollTop
    
        if (scrollPosition > 100) {
            // Add the class if scrolled more than 100px
            body.classList.add('scrolled')
        } else {
            // Remove the class if scrolled less than 100px
            body.classList.remove('scrolled')
        }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    //toggle header scroll----------------------------------------------------------------------------------------------------

    //custom accordion--------------------------------------------------------------------------------------------------------
    const headerAccordions = document.querySelectorAll('.accordion-header')
    const contents = document.querySelectorAll('.accordion-content')

    if (contents.length > 0) {
        const firstContent = contents[0]
        firstContent.style.height = firstContent.scrollHeight + 'px'
        firstContent.classList.add('active')
    }

    headerAccordions.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling
    
            // Toggle the active state
            if (content.style.height && content.style.height !== '0px') {
                // Close the active section
                content.style.height = '0px'
                content.classList.remove('active')
            } else {
                // Close all sections
                document.querySelectorAll('.accordion-content').forEach(otherContent => {
                otherContent.style.height = '0px'
                otherContent.classList.remove('active')
                });
    
                // Open the clicked section
                content.style.height = content.scrollHeight + 'px'
                content.classList.add('active')
            }
        })
    })
    //custom accordion--------------------------------------------------------------------------------------------------------

    //toggle navlist----------------------------------------------------------------------------------------------------------
    const btnOpenNavList = document.querySelector('.btn-open-nav')
    const btnCloseNavList = document.querySelector('.btn-close-nav')

    btnOpenNavList.addEventListener('click', (e) => {
        e.preventDefault()
        body.classList.add('show-nav')
    })

    btnCloseNavList.addEventListener('click', (e) => {
        e.preventDefault()
        body.classList.remove('show-nav')
    })
    //toggle navlist----------------------------------------------------------------------------------------------------------
})


