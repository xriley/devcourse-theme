"use strict";

/* ======= FAQ accordion ======= */
const accordionTogglers = document.querySelectorAll('.module-toggle');
 
accordionTogglers.forEach((accordionToggler) => {
	accordionToggler.addEventListener('click', function () {
		
		let togglerIcon = accordionToggler.querySelector('.svg-inline--fa');
		
		if (togglerIcon.getAttribute('data-icon') == 'plus') {
			togglerIcon.setAttribute('data-icon', 'minus');
		} else {
			togglerIcon.setAttribute('data-icon', 'plus');
		}
		
		
	});
});