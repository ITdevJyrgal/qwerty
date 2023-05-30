var swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
		992: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		414: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		375: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	},
})
swiper()
