let status = 'stop'

const stopLight = document.getElementById('js-1');
const warningLight = document.getElementById('js-2');
const moveLight = document.getElementById('js-3');

setInterval(function(){

	stopLight.classList.remove('-active');
	warningLight.classList.remove('-active');
	moveLight.classList.remove('-active');
	
	if (status==='stop'){
		stopLight.classList.add('-active');
		warningLight.classList.remove('-active');
		moveLight.classList.remove('-active');

		status='before_move';
	} else if (status==='before_move'){
		stopLight.classList.add('-active');
		warningLight.classList.add('-active');
		moveLight.classList.remove('-active');

		status='move';
	} else if (status==='move') {
		stopLight.classList.remove('-active');
		warningLight.classList.remove('-active');
		moveLight.classList.add('-active');

		status='warning';
	} else if (status==='warning') {
		stopLight.classList.remove('-active');
		warningLight.classList.add('-active');
		moveLight.classList.remove('-active');

		status='stop';
	};
}, 1000);