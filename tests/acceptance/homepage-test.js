import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | homepage', function(hooks) {
  setupApplicationTest(hooks);

  test('should show recipes as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/recipes', 'should redirect automatically');
  });

  test('should link to information about the company', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
    await visit('/');
    await click(".menu-recipes");
    assert.equal(currentURL(), '/recipes', 'should navigate to recipes');
  });
});
