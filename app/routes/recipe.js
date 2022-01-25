import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    let response = await fetch('/api/recipes.json');
    let parsed = await response.json();
    return parsed[0];
  }
});
