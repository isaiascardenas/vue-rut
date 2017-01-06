exports.install = function (Vue) {

	Vue.directive('rut', require('./rutDirective'))
	Vue.filter('rut', require('./rutFilter'));
};
