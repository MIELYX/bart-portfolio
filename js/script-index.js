const hamburgerBtn = document.querySelector('.nav__hamburger')
const navPopup = document.querySelector('.nav__popup')
const navItems = document.querySelectorAll('.nav-item')


hamburgerBtn.addEventListener('click', () => {
	navPopup.classList.toggle('nav__popup--hidden')
	document.body.classList.toggle('body--stuck')
})

navItems.forEach(element =>
	element.addEventListener('click', () => {
		navPopup.classList.add('nav__popup--hidden')
		document.body.classList.remove('body--stuck')
	})
)
