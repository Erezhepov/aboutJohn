/*==BURGER=======================================================================*/
const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const body = document.body
headerBurger.addEventListener('click', function () {
	headerBurger.classList.toggle('active')
	headerMenu.classList.toggle('active')
	body.classList.toggle('lock')
})
/*==BURGER=======================================================================*/
