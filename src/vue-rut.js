import { rutDirective, rutFilter } from './util';

exports.install = function (Vue) {

	Vue.directive('rut', rutDirective);
	Vue.filter('rut', rutFilter);
};
