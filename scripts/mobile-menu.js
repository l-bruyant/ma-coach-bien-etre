const mobileMenu = document.getElementById('mobile-menu')
const mobileMenuButton = document.getElementById('mobile-menu-button')
const mobileMenuButtonIcon = document.getElementById('mobile-menu-icon')
const body = document.querySelector('body')

function toggleMobileMenu () {
    if (mobileMenu.classList.contains('closed-menu')) {
        console.log('open-menu')
        mobileMenu.classList.remove('closed-menu')
        mobileMenu.classList.add('open-menu')
        mobileMenuButton.classList.remove('mobile-menu-button')
        mobileMenuButton.classList.add('mobile-menu-button-fixed')
        mobileMenuButtonIcon.classList.remove('fa-bars')
        mobileMenuButtonIcon.classList.add('fa-xmark')
        body.classList.add('locked-body')
    } else if (mobileMenu.classList.contains('open-menu')) {
        console.log('close-menu')
        mobileMenu.classList.remove('open-menu')
        mobileMenu.classList.add('closed-menu')
        mobileMenuButton.classList.remove('mobile-menu-button-fixed')
        mobileMenuButton.classList.add('mobile-menu-button')
        mobileMenuButtonIcon.classList.remove('fa-xmark')
        mobileMenuButtonIcon.classList.add('fa-bars')
        body.classList.remove('locked-body')
    }
}
