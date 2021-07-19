/** Observer animation CSS */
const ratio = .3
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.remove('reveal')
            observer.unobserve(entry.target)
        }
    });
}

document.documentElement.classList.add('reveal-loaded')

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})

/** Event page celib amie */

document.querySelector('#friend-btn').addEventListener('click', () => {
    document.querySelector('#instructions .content').classList.add('slide-rigth')
    document.querySelector('#instructions .content').classList.remove('slide-left')
    document.querySelector('#instructions').classList.remove('small') 
})

document.querySelector('#single-btn').addEventListener('click', (e) => {
    document.querySelector('#instructions .content').classList.add('slide-left')
    document.querySelector('#instructions .content').classList.remove('slide-right')
    document.querySelector('#instructions').classList.remove('small') 
})

document.querySelectorAll('.slide button').forEach((e) => {
    e.addEventListener('click', () => {
        document.querySelector('#instructions .content').classList.remove('slide-rigth')
        document.querySelector('#instructions .content').classList.remove('slide-left')
        document.querySelector('#instructions').classList.add('small') 
    })
})

$(document).ready(function(){		
    $('section#introduction').parallax("center", 0.5, 0.1, true);
    $('section#present').parallax("center", 0.5, 0.1, true);
})