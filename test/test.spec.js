import vueRut from './../dist/vue-rut';
import Vue from 'vue';

describe('vue-rut: Vue directive', () => {

  var vm;

    beforeEach(() => {
      Vue.use(vueRut);

        vm = new Vue({
          template: `
            <input id="app" v-rut type="text" v-model="rut">
          `,
          data: {
            rut: ''
          }
        }).$mount()
    });

  describe('input whit rut format test', () => {

    it('should make input display an empty string if model value is empty', (done) => {
      vm.rut = '';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('');
        done();
      });
    });

    it('should set input value to rut format with nine digits', (done) => {
      vm.rut = '123456789';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('12.345.678-9');
        done();
      });
    });

    it('should set input value to rut format with eight digits', (done) => {
      vm.rut = '12345678';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('1.234.567-8');
        done();
      });
    });

    it('should make input display an empty string if model value is not number or "k"', (done) => { 
      vm.rut = 'string_(*?!`~/,.-';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('');
        done();
      });
    });

    it('should set input value to "k" if model value is a string with "k"', (done) => { 
      vm.rut = 'stringWithk';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('k');
        done();
      });
    });

    it('should set input value to lowercase "k" if model value is a uppercase "k"', (done) => { 
      vm.rut = 'stringWithUppercaseK';
      
      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('k');
        done();
      });
    });

    it('should set input value to rut format with k', (done) => { 
      vm.rut = '8173258k';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('8.173.258-k');
        done();
      });
    });

    it('should set input value to rut format if "." and "-" are within model value', (done) => { 
      vm.rut = '10.897.268-6';

      vm.$nextTick(() => {
        expect(vm.$el.value).toEqual('10.897.268-6');
        done();
      });
    });

  });


  describe('rut validation test', () => {

    it('should set model to clean input rut if model value is a valid rut with 9 digits', (done) => { 
      vm.rut = '19.111.897-9';

      vm.$nextTick(() => {
        expect(vm.rut).toEqual('191118979');
        done();
      });
    });

    it('should set model to null if model value is a invalid rut', (done) => { 
      vm.rut = '19.111.897-1';

      vm.$nextTick(() => {
        expect(vm.rut).toBe(null);
        done();
      });
    });

    it('should set model to clean input rut if model value is a valid rut with 8 digits', (done) => { 
      vm.rut = '8.820.757-2';

      vm.$nextTick(() => {
        expect(vm.rut).toEqual('88207572');
        done();
      });
    });

    it('should set model to clean input rut if model value is a valid rut with k', (done) => { 
      vm.rut = '14.198.117-k';
      
      vm.$nextTick(() => {
        expect(vm.rut).toEqual('14198117k');
        done();
      });
    });

    it('should set model to null if model value is a string', (done) => { 
      vm.rut = 'string';
      
      vm.$nextTick(() => {
        expect(vm.rut).toBe(null);
        done();
      });
    });
  });
});

describe('vue-rut: Vue filter test', () => {

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
