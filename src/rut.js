function cleanRut(rut) {
	return rut.replace(/[^0-9kK]+/g,'').toLowerCase();
}

function formatRut(rut) {
	if (rut.length > 1) {
		rut = rut.slice(0,-1)+'-'+rut.slice(-1);
	if (rut.length > 5) {
if (rut.length > 8) {
				return rut.slice(0,-8)+'.'+rut.slice(-8,-5) +'.'+rut.slice(-5);
			}
		return rut.slice(0,-5) +'.'+rut.slice(-5);
		}
	}
	return rut
}

function validateRut(rut) {
	var numberRut = cleanRut(rut).slice(0,-1);
	if (numberRut.length > 6) {
		var auxArray = [3,2,7,6,5,4,3,2]
		var sum =0

		for (var i = numberRut.length - 1; i >= 0; i--) {
			sum += parseInt(numberRut[i])*auxArray[i];
		}
		switch(11 - sum%11){
			case 11:
				return rut.slice(-1) == 0; 
			case 10:
				return rut.slice(-1) == 'k';
			default:
				return rut.slice(-1) == (11 - sum%11);
		}
	}
	return false;
}

export default function(el, binding, vnode) {

	var event = new Event('input', {bubbles: true});
	el.value = formatRut(cleanRut(el.value));
	el.dispatchEvent(event);

	var field = binding.expression;

	if (validateRut(el.value)) {
		vnode.context[field] = true;
	}
	else {
		vnode.context[field] = false;
	}
}
