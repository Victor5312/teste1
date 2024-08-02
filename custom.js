
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden-direita')) {
                entry.target.classList.add('show-direita');
            } else if (entry.target.classList.contains('hidden-cima')) {
                entry.target.classList.add('show-cima');
            } else {
                entry.target.classList.add('show');
            }
        } else {
            if (entry.target.classList.contains('hidden-direita')) {
                entry.target.classList.remove('show-direita');
            } else if (entry.target.classList.contains('hidden-cima')) {
                entry.target.classList.remove('show-cima');
            } else {
                entry.target.classList.remove('show');
            }
        }
    })
})

const elements = document.querySelectorAll('.hidden, .hidden-direita, .hidden-cima');

elements.forEach((element) => myObserver.observe(element));
