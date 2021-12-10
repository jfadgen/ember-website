import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | recipe', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a recipe with properties', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Recipe />`);

    assert.dom('.recipe').exists();
    assert.dom('.recipe .reference').exists();
    assert.dom('.recipe .cooking_summary').exists();
    assert.dom('.recipe .category').exists();
    assert.dom('.recipe .ingredients').exists();
  });

  test('it accepts attributes', async function(assert) {
    await render(hbs`<Recipe
      @title="A title"
      @reference='www.google.com'
      @cooking_summary='350 for 20 minutes'
      @category='dessert'
      @ingredients="[{item:'1 cup flour'}]"
    />`);

    assert.dom('.recipe .title').includesText('A title');
    assert.dom('.recipe .reference').includesText('www.google.com');
    assert.dom('.recipe .cooking_summary').includesText('350 for 20 minutes');
    assert.dom('.recipe .category').includesText('dessert');
    // assert.dom('.recipe .ingredients').includesText('1 cup flour'); // Revisit.
  });
});
