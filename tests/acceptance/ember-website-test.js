import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember website', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/recipes');
    assert.dom('h1').hasText('Homepage');

    assert.dom('.menu .links a.menu-about').hasText('About');
    await click('.menu .links a.menu-about');

    assert.equal(currentURL(), '/about');
  });
});
