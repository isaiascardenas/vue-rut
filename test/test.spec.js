import vueRut from './../dist/vue-rut'
import Vue from 'vue'

Vue.use(vueRut);

const vm = new Vue({
  template: `
    <div>
      <input v-rut="validRut" v-model="rut" type="text">
    </div>
  `,
  data: {
    rut: '',
    validRut: false
  }
}).$mount()


describe("vue-rut format test", () => {

  it('should make input display an empty string if model value is empty', () => {
    vm.rut = '';
    vm.$mount();

    expect(vm.$el.querySelector('input').value).toEqual('');
  });

  it('should set model to rut format with nine digits', () => {
    vm.rut = '666666666';
    vm.$mount();

    expect(vm.rut).toEqual('66.666.666-6');
  });

  it('should set model to rut format with eight digits', () => {
    vm.rut = '66666666';
    vm.$mount();

    expect(vm.rut).toEqual('6.666.666-6');
  });

  it('should set input value to rut format if model value is not empty', () => {
    vm.rut = '666666666';
    vm.$mount();

    expect(vm.$el.querySelector('input').value).toEqual('66.666.666-6');    
  });

  it('should make input display an empty string if model value is not number or "k"', () => { 
    vm.rut = 'string_(*?!`~/,.-';
    vm.$mount();

    expect(vm.rut).toEqual('');
  });

  it('should set model to "k" if model value is a string with "k"', () => { 
    vm.rut = 'stringWithk';
    vm.$mount();

    expect(vm.rut).toEqual('k');
  });

  it('should set model to lowercase "k" if model value is a uppercase "k"', () => { 
    vm.rut = 'stringWithUppercaseK';
    vm.$mount();

    expect(vm.rut).toEqual('k');
  });

  it('should set model to rut format with k', () => { 
    vm.rut = '8173258k';
    vm.$mount();

    expect(vm.rut).toEqual('8.173.258-k');
  });

  it('should set model to rut format if "." and "-" are within model value', () => { 
    vm.rut = '10.897.268-6';
    vm.$mount();

    expect(vm.rut).toEqual('10.897.268-6');
  });
});

describe('vue-rut valid rut test', () => {

  it('should set directive expression (validRut) to true if model value is a valid rut with 9 digits', () => { 
    vm.rut = '19.111.897-9';
    vm.$mount();

    expect(vm.validRut).toBe(true);
  });

  it('should set directive expression (validRut) to false if model value is a invalid rut', () => { 
    vm.rut = '19.111.897-1';
    vm.$mount();

    expect(vm.validRut).toBe(false);
  });

  it('should set directive expression (validRut) to true if model value is a valid rut with 8 digits', () => { 
    vm.rut = '8.820.757-2';
    vm.$mount();

    expect(vm.validRut).toBe(true);
  });

  it('should set directive expression (validRut) to true if model value is a valid rut with k', () => { 
    vm.rut = '19.794.367-k';
    vm.$mount();

    expect(vm.validRut).toBe(true);
  });

  it('should set directive expression (validRut) to false if model value is a string', () => { 
    vm.rut = 'string';
    vm.$mount();

    expect(vm.validRut).toBe(false);
  });
});
