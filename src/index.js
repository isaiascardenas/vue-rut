import vueRut from './rut.js';

const install = function (Vue) {

	Vue.directive('rut', vueRut);
};

export default {install};