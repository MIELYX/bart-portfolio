const slider = document.querySelector('.slider')
let k = 0.2

const scroll = e => {
	slider.scroll(window.scrollY * k, 0)
}

document.addEventListener('scroll', scroll)
