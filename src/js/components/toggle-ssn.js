
var toggleFieldMask = require('./toggle-field-mask');

module.exports = function ($el) {
  var fieldSelector =  '#' + $el.attr('aria-controls'),
    $field = $el.parents('form').find(fieldSelector),
    showing = false;

  $el.on('click', function (ev) {
    ev.preventDefault();
    toggleFieldMask($field, showing);
    $el.text(showing ? 'Show SSN' : 'Hide SSN');
    showing = !showing;
  });
};
