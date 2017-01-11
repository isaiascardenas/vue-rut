import vueRut from './../dist/vue-rut'
import Vue from 'vue'

describe("vue-rut format test", () => {

	var vm;

	beforeEach(() => {
		Vue.use(vueRut);

		vm = new Vue({
		  template: `
		      <input id="app" v-rut v-model="rut" type="text">
		  `,
		  data: {
		    rut: ''
		  }
		}).$mount()
	});

  it('should make input display an empty string if model value is empty', () => {
    // vm.rut = '123456789';
    // vm._vnode.elm.value = '123456789';
    vm.$set(vm._vnode.elm, 'value', '123456789');

    vm.$nextTick(function () {
      console.log('test input', vm._vnode.elm.value);
      console.log('test model', vm.rut);
    });

    expect(vm.$el.value).toEqual('12.345.678-9');
  });

  // it('should set model to rut format with nine digits', () => {
  //   vm.rut = '666666666';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('66.666.666-6');
  // });

  // it('should set model to rut format with eight digits', () => {
  //   vm.rut = '66666666';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('6.666.666-6');
  // });

  // it('should set input value to rut format if model value is not empty', () => {
  //   vm.rut = '666666666';
  //   vm.$mount();

  //   expect(vm.$el.querySelector('input').value).toEqual('66.666.666-6');    
  // });

  // it('should make input display an empty string if model value is not number or "k"', () => { 
  //   vm.rut = 'string_(*?!`~/,.-';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('');
  // });

  // it('should set model to "k" if model value is a string with "k"', () => { 
  //   vm.rut = 'stringWithk';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('k');
  // });

  // it('should set model to lowercase "k" if model value is a uppercase "k"', () => { 
  //   vm.rut = 'stringWithUppercaseK';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('k');
  // });

  // it('should set model to rut format with k', () => { 
  //   vm.rut = '8173258k';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('8.173.258-k');
  // });

  // it('should set model to rut format if "." and "-" are within model value', () => { 
  //   vm.rut = '10.897.268-6';
  //   vm.$mount();

  //   expect(vm.rut).toEqual('10.897.268-6');
  // });
});

// describe('vue-rut valid rut test', () => {

//   it('should set directive expression (validRut) to true if model value is a valid rut with 9 digits', () => { 
//     vm.rut = '19.111.897-9';
//     vm.$mount();

//     expect(vm.validRut).toBe(true);
//   });

//   it('should set directive expression (validRut) to false if model value is a invalid rut', () => { 
//     vm.rut = '19.111.897-1';
//     vm.$mount();

//     expect(vm.validRut).toBe(false);
//   });

//   it('should set directive expression (validRut) to true if model value is a valid rut with 8 digits', () => { 
//     vm.rut = '8.820.757-2';
//     vm.$mount();

//     expect(vm.validRut).toBe(true);
//   });

//   it('should set directive expression (validRut) to true if model value is a valid rut with k', () => { 
//     vm.rut = '14.198.117-k';
//     vm.$mount();

//     expect(vm.validRut).toBe(true);
//   });

//   it('should set directive expression (validRut) to false if model value is a string', () => { 
//     vm.rut = 'string';
//     vm.$mount();

//     expect(vm.validRut).toBe(false);
//   });
// });

describe('vue-rut filter test', () => {

	var vm;

	beforeEach(() => {
		Vue.use(vueRut);

		vm = new Vue({
		  template: `
		    <div>
		      <p id="app">{{rutNumber | rut}}</p>
		    </div>
		  `,
		  data: {
		  	rutNumber: '191118979'
		  }
		}).$mount()
	});
  
  it("filter in a document", () => {
    expect(vm.$el.querySelector('#app').textContent).toEqual('19.111.897-9');
  });
});
