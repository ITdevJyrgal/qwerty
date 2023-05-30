// -----------------------------------------

const x = document.querySelector('.close-btn')
x.addEventListener('click', () => {
	document.querySelector('.mobile-menu').style.display = 'none'
})

const button = document.querySelector('.burger-menu')
button.addEventListener('click', () => {
	document.querySelector('.mobile-menu').style.display = 'block'
})

// -------------------------------------------

$('.rev_slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 2.35,
			},
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1.7,
			},
		},
		{
			breakpoint: 577,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 415,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 321,
			settings: {
				slidesToShow: 0.6,
			},
		},
	],
})

//---------------------------------------------------------------------------

function openLink(evt, animName) {
	let i, x, tablinks
	x = document.getElementsByClassName('city')
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
	}
	tablinks = document.getElementsByClassName('tablink')
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' w3-red', '')
	}
	document.getElementById(animName).style.display = 'block'
	evt.currentTarget.className += ' w3-red'
}
document.getElementById('defaultOpen').click()

//---------------------------------------------------------------------------

function menuFunction2() {
	document.getElementById('menudown2').classList.toggle('show2')
}
menuFunction2()

window.onclick = function (event) {
	if (!event.target.matches('.menu__btn2')) {
		let dropdowns = document.getElementsByClassName('menu-content2')
		let i
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i]
			if (openDropdown.classList.contains('show2')) {
				openDropdown.classList.remove('show2')
			}
		}
	}
}

//-----------------------------------------------------------------------------------

//---------------------------------------------

function menuFunction() {
	document.getElementById('menudown').classList.toggle('show')
}

window.onclick = function (event) {
	if (!event.target.matches('.menu__btn')) {
		let dropdowns = document.getElementsByClassName('menu-content')
		let i
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i]
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show')
			}
		}
	}
}

menuFunction()

function openCity(cityName) {
	var i
	var x = document.getElementsByClassName('city')
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none'
	}
	document.getElementById(cityName).style.display = 'block'
}

//------------------------------------------------------------
