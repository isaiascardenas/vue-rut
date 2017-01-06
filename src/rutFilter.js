import { cleanRut, formatRut } from './util';

module.exports =  function(value) {
  return formatRut(cleanRut(value));
}
