const slider = document.querySelector('.slider')
let k = 0.2

const scroll = e => {
	slider.scroll(window.scrollY * k, 0)
}

// e => {
// 	console.log(window.scrollY)
// }
document.addEventListener('scroll', scroll)
