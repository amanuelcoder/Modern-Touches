require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Men', sortOrder: 10},
    {name: 'Women', sortOrder: 20},
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // {name: 'Ray-Ban RB2132 New Wayfarer Classic', image: 'https://i.imgur.com/1OmNppQ.png', category: categories[0], price: '$151.00'},
    {name: 'Ray-Ban RB3025 Aviator Total Black', emoji: '🥪', category: categories[0], price: 163.00},
    {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
  
  ]);

  console.log(items)

  process.exit();

})();
