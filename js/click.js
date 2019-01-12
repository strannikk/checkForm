"use strict";
(function ($) {

	const f = document.getElementById('f1'),
	//necessary will be chossed with type chekbox
		  chek = f.querySelectorAll('input[type=checkbox]');

	f.onclick = (e) => {
		// e.preventDefault();
		let elem = e.target

		if (elem.tagName === 'INPUT') {
			console.log (elem.id)
			document.getElementById(elem.id).checked = true;
		}

		if (elem.tagName === 'BUTTON') {
			e.preventDefault();
			let z = 0;
			console.log(z)
			for (let i = chek.length - 1; i >= 0; i--) {
				if (!chek[i].checked) {
					console.log('i:',i);
					chek[i].classList.add('error');
					z++;
				}
			}
			console.log('s:',z);
			if (+z === 0) {
				f.submit();
			} else {
				return false;
			}
		}
	}
})(jQuery);
