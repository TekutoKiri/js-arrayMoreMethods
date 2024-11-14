function getPopularCategories(products) {
  const filteredProducts = products
    .filter(product => product.sales > 5)  // Фільтруємо товари, які продані більше ніж 5 разів
    .sort((a, b) => b.sales - a.sales);   // Сортуємо за кількістю продажів (спочатку більше)

  const categories = [];
  
  // Додаємо категорії в масив, уникаючи повторів
  filteredProducts.forEach(product => {
    if (categories.indexOf(product.category) === -1) {
      categories.push(product.category);
    }
  });

  return categories;
}

const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']

module.exports = getPopularCategories;
