(function () {
  'use strict';

  var translations = {
    'agua': 'Water',
    'agua con gas': 'Sparkling water',
    'agua mineral': 'Mineral water',
    'alfajor': 'Alfajor cookie',
    'alfajores': 'Alfajor cookies',
    'arepa con queso': 'Arepa with cheese',
    'arroz con leche': 'Rice pudding',
    'avena': 'Oatmeal',
    'batido de fresa': 'Strawberry smoothie',
    'batido de mango': 'Mango smoothie',
    'batido de vainilla': 'Vanilla milkshake',
    'bizcocho de limon': 'Lemon cake',
    'bocadillo de jamon y queso': 'Ham and cheese sandwich',
    'brownie': 'Brownie',
    'bunuelos': 'Cheese fritters',
    'cafe': 'Coffee',
    'cafe americano': 'Americano',
    'cafe con leche': 'Coffee with milk',
    'cafe de olla': 'Mexican spiced coffee',
    'cafe descafeinado': 'Decaf coffee',
    'cafe espresso': 'Espresso',
    'cafe frio': 'Iced coffee',
    'cafe helado': 'Iced coffee',
    'cafe latte': 'Caffè latte',
    'cafe moka': 'Mocha',
    'cafe negro': 'Black coffee',
    'capuchino': 'Cappuccino',
    'chocolate caliente': 'Hot chocolate',
    'chocolate frio': 'Iced chocolate',
    'churros': 'Churros',
    'croissant': 'Croissant',
    'deditos de queso': 'Cheese sticks',
    'desayuno completo': 'Full breakfast',
    'empanada': 'Savory turnover',
    'empanada de carne': 'Beef empanada',
    'empanada de pollo': 'Chicken empanada',
    'empanada de queso': 'Cheese empanada',
    'empanadas': 'Savory turnovers',
    'empanadas de carne': 'Beef empanadas',
    'empanadas de pollo': 'Chicken empanadas',
    'empanadas de queso': 'Cheese empanadas',
    'ensalada de frutas': 'Fruit salad',
    'ensalada de pollo': 'Chicken salad',
    'ensalada mixta': 'Mixed salad',
    'espresso': 'Espresso',
    'flan': 'Caramel custard',
    'galleta de avena': 'Oatmeal cookie',
    'galletas': 'Cookies',
    'galletas con chispas de chocolate': 'Chocolate chip cookies',
    'hamburguesa': 'Burger',
    'huevos revueltos': 'Scrambled eggs',
    'jugo de manzana': 'Apple juice',
    'jugo de naranja': 'Orange juice',
    'latte': 'Latte',
    'latte helado': 'Iced latte',
    'limonada': 'Lemonade',
    'muffin de arandanos': 'Blueberry muffin',
    'pan de banano': 'Banana bread',
    'pan de queso': 'Cheese bread',
    'pan integral': 'Whole wheat bread',
    'pan tostado': 'Toast',
    'pandebono': 'Colombian cheese bread',
    'papas fritas': 'French fries',
    'pastel de chocolate': 'Chocolate cake',
    'pastel de zanahoria': 'Carrot cake',
    'perro caliente': 'Hot dog',
    'refresco': 'Soft drink',
    'rollo de canela': 'Cinnamon roll',
    'sandwich de jamon y queso': 'Ham and cheese sandwich',
    'sandwich de pollo': 'Chicken sandwich',
    'sandwich de queso': 'Cheese sandwich',
    'sopa de pollo': 'Chicken soup',
    'te': 'Tea',
    'te chai': 'Chai tea',
    'te de manzanilla': 'Chamomile tea',
    'te frio': 'Iced tea',
    'te helado': 'Iced tea',
    'te negro': 'Black tea',
    'te verde': 'Green tea',
    'torta de chocolate': 'Chocolate cake',
    'torta de tres leches': 'Tres leches cake',
    'torta de zanahoria': 'Carrot cake',
    'yogur con granola': 'Yogurt with granola',
    'yogurt con granola': 'Yogurt with granola'
  };

  function key(name) {
    var value = name.toLowerCase().trim().replace(/\s+/g, ' ');
    return typeof value.normalize === 'function'
      ? value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      : value;
  }

  function suggest(name) {
    var normalizedName = key(name);
    return Object.prototype.hasOwnProperty.call(translations, normalizedName)
      ? translations[normalizedName]
      : '';
  }

  function label(product) {
    var englishName = product.nameEn || suggest(product.name);
    return key(englishName) === key(product.name) ? '' : englishName;
  }

  window.CAFE_ENGLISH = { suggest: suggest, label: label };
}());
