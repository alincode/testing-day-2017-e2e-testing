const assert = require('assert');

describe('angularjs', () => {

   beforeEach(function() {
    browser.pause(3000);
  });

  it('加', () => {
    browser.url('http://juliemr.github.io/protractor-demo/');
    $('[ng-model=first]').setValue(1);
    $('[ng-model=second]').setValue(2);
    $('[ng-model=operator]').selectByValue('ADDITION');
    $('#gobutton').click();
    browser.waitForExist('tbody tr');
    assert.equal($('.ng-binding').getText(), 3);
  });

  it('減', () => {
    browser.url('http://juliemr.github.io/protractor-demo/');
    $('[ng-model=first]').setValue(3);
    $('[ng-model=second]').setValue(2);
    $('[ng-model=operator]').selectByValue('SUBTRACTION');
    $('#gobutton').click();
    browser.pause(7000);
    assert.equal($('.ng-binding').getText(), 1);
  });

  it('乘', () => {
    browser.url('http://juliemr.github.io/protractor-demo/');
    $('[ng-model=first]').setValue(2);
    $('[ng-model=second]').setValue(3);
    $('[ng-model=operator]').selectByValue('MULTIPLICATION');
    $('#gobutton').click();
    browser.pause(7000);
    assert.equal($('.ng-binding').getText(), 6);
  });

  it('除', () => {
    browser.url('http://juliemr.github.io/protractor-demo/');
    $('[ng-model=first]').setValue(8);
    $('[ng-model=second]').setValue(2);
    $('[ng-model=operator]').selectByValue('DIVISION');
    $('#gobutton').click();
    browser.pause(7000);
    assert.equal($('.ng-binding').getText(), 4);
  });
});