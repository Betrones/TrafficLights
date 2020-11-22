function makeActive1() {
	document.getElementById('js-1').classList.toggle('-active')
	// setTimeout(document.getElementById('js-1').classList.toggle('-active'), 1000)
}

function removeActive1(){
	document.getElementById('js-1').classList.remove('-active')
}

function makeActive2() {
	document.getElementById('js-1').classList.toggle('-active')
	// setTimeout(document.getElementById('js-1').classList.toggle('-active'), 1000)
}

function removeActive2(){
	document.getElementById('js-2').classList.remove('-active')
}

function makeActive3() {
	document.getElementById('js-1').classList.toggle('-active')
	// setTimeout(document.getElementById('js-1').classList.toggle('-active'), 1000);
}

function removeActive3(){
	document.getElementById('js-3').classList.remove('-active')
}

function trafficControl(){
makeActive1()
// makeActive2()
// makeActive3()
setTimeout(removeActive1, 2000);
setTimeout(clearInterval(), 2000);

setTimeout(makeActive2, 1000);
setTimeout(removeActive2, 2000);
setTimeout(clearInterval(), 2000);

setTimeout(makeActive3, 2000);
setTimeout(removeActive3, 3000);
setTimeout(clearInterval(), 2000);

setTimeout(makeActive2, 3000)
setTimeout(removeActive2, 4000)
}

setInterval(trafficControl, 4000)