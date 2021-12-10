import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 'agave-chocolate-chip-cookies',
        title: 'Agave Chocolate Chip Cookies',
        category: 'dessert',
        reference: 'https://www.justapinch.com/recipes/dessert/cookies/agave-chocolate-chip-cookies.html',
        cooking_summary: '350˚F for 12 minutes',
        ingredients: [
          { item: "1/3 cup unsalted butter, softenend" },
          { item: "3/4 cup light agave nectar" },
          { item: "1 large egg" },
          { item: "1 Tbsp vanilla extract" },
          { item: "1 1/2 c all purpose flour" },
          { item: "3/4 c oat flour (or oat bran)" },
          { item: "1/2 tsp baking soda" },
          { item: "1/2 tsp salt" },
          { item: "1/2 tsp ground cinnamon" },
          { item: "1 cup semi-sweet chocolate chips" },
        ]
      }
    ];
  }
});
