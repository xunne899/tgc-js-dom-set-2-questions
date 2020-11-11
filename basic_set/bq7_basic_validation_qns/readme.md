# BQ7 - Basic Validation

This question is to practise techniques in validation. 
There is a form contained in `index.html`, which asks the user how many scoops of icecream they want to order, and the toppings that they
want. The following rules are to observed:

* The number of scoops must be between 1 to 5
* The number of scoops must be a whole number
* The user can only select three toppings, out of the five.

## Your task

1. Make a copy of `script.template.js` and rename it as `script.js`

2. Uncomment the `<script src='script.js'></script>` in `index.html`

3. In `script.js`, complete the `validate` function. It should return an **empty array** if there are no errors. If there are errors,
   return an array containing a string that represents the error(s).

   * If the number of scoops is not between 1 to 5, the code is `'invalid-scoop-number'`
   * If the number of scoops is a valid integer, the code is `'scoop-not-a-number'`
   * If the user selects more than three topping, the code is `'too-much-toppings`

   So if the user enter 6 for the scoop number, and picked four toppings, 
   the `validate` function should return `['invalid-scoop-number', 'too-much-toppings']`
