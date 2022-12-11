const slider = document.querySelector('.slider')
let k = 0.2

const scroll = e => {
	slider.scroll(window.scrollY, 0)
}

window.addEventListener('scroll', scroll)
