const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-show')
        } else {
            entry.target.classList.remove('anim-show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.anim-hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenDownElements = document.querySelectorAll('.anim-hidden-down');
hiddenDownElements.forEach((el) => observer.observe(el));

const hiddenLeftElements = document.querySelectorAll('.anim-hidden-left');
hiddenLeftElements.forEach((el) => observer.observe(el));

const hiddenRightElements = document.querySelectorAll('.anim-hidden-right');
hiddenRightElements.forEach((el) => observer.observe(el));
