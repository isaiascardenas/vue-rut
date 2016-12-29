# Vue-Rut

A Vue package to format and validate a chilean rut.
 
## Installation

Run the installation via npm:

```bash
npm install vue-rut --save-dev
```

And add in your `main.js`  the `require()` function before to create a Vue instance, so in your vue object add a empty var into the data property.

```javascript
// main.js

var vueRut = require('vue-rut');
Vue.use(vueRut);

const app = new Vue({

    el:'#app',
    data:{
        rut: ''
    }
});

...

```
## Basic usage

Link the vue instance whith the html, add the directive `v-rut` and the `v-model` into your input.

```html
<div id="app">
  ...
  <input v-rut v-model="rut">
  ...
</div>
```

This will bind the input with `data.rut` and format the input to chilean rut.

## Validation

To validate the rut add a boolean var into the `data` property.

```javascript
// main.js

var vueRut = require('vue-rut');
Vue.use(vueRut);

const app = new Vue({

    el:'#app',
    data:{
        rut: '',
        validRut: false
    }
});

...

```
And add this var to the directive:

```html
<div id="app">
  ...
  <input v-model="rut" v-rut="validRut">
  ...
</div>
```
This will change the value of `validRut` to true or false when the rut is valid.
