import { cleanRut, formatRut, validateRut } from './util';

module.exports = {

	bind: function(el, binding, vnode) {
		this.inputValue = '';

		for (var i = vnode.data.directives.length - 1; i >= 0; i--) {
			if (vnode.data.directives[i].name == 'model') {
				var field = vnode.data.directives[i].expression;
				break;
			}
		}

		this.vueModel = vnode.context[field];
	},

	update: function(el, binding, vnode) {

		this.inputValue = vnode.elm.value;
		this.inputValue = formatRut(cleanRut(this.inputValue));
		el.value = this.inputValue;

		if (validateRut(inputValue)) {
			this.vueModel = this.inputValue;
		}
		else {
			this.vueModel = null;
		}
	},

	data: function() {
		return {
			vueModel: '', 
			inputValue: ''
		};
	}
}
