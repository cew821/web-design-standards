var mocha = require('mocha');
var should = require('should');
var jsdom = require('jsdom').jsdom;

var $;
var Accordion;
var template = require('./template.js');

// expose these globally so jquery can detect them
global.document = jsdom('<html><body></body></html>', {});;
global.window = document.defaultView;;

$ = require('jquery');
Accordion = require('../../../src/js/components/accordion.js');

var EXPANDED = 'aria-expanded';
var CONTROLS = 'aria-controls';

describe('Accordion component', function () {
  var $el;
  var $trigger;

  beforeEach(function () {
    var $component = $(template);
    var accordion;

    $('body').append($component);

    accordion = new Accordion($component);
    $el = accordion.$root;
    $trigger = $el.find('button');
  });   

  afterEach(function () {
    document.body.textContent = '';
  });

  it('exposes its underlying html element', function () {
    $el.should.not.be.undefined();
  });

  describe('DOM state', function () {
    it('has an "aria-expanded" attribute', function () {
      $trigger.attr(EXPANDED).should.not.be.undefined();
    });

    it('has an "aria-controls" attribute', function () {
      $trigger.attr(CONTROLS).should.not.be.undefined();
    });

    it('toggles "aria-expanded" when show is triggered', function () {
      $trigger.trigger('click');
      $trigger.attr(EXPANDED).should.equal('true');
    });

    it('toggles "aria-expanded" when hide is triggered', function () {
      $trigger.trigger('click');
      $trigger.trigger('click');
      $trigger.attr(EXPANDED).should.equal('false');
    });
  });
});

