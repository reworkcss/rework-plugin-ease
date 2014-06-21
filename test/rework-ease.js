
var rework = require('rework')
  , ease = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.ease()', function(){
  it('should add additional easing functions', function(){
    rework(fixture('easing'))
      .use(ease())
      .toString()
      .should.equal(fixture('easing.out'));
  })
})
