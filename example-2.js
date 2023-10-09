/*Example 2 - Storagе

Write a `Storage` class that creates objects for managing a warehouse of goods.
When called, it will receive one argument - the initial array of goods, and write
it to the `items` property.

Add class methods:

- `getItems()` - returns an array of products.
- `addItem(item)` - receives a new product and adds it to the current ones.
- `removeItem(item)` - receives the product and, if it exists, removes it from the current
*/

class Storage {
  constructor(arr) {
    this.items = arr;
  }

  getItems() {
    return this.items
  }

  addItem(item) {
    if (this.items.includes(item)) {
      return console.log(`Item ${item} is already in the storage list`)
    }

    return this.items.push(item)
  }

  removeItem(item) {
    if (this.items.includes(item)) {
      const itemIndex = this.items.indexOf(item)
      this.items.splice(itemIndex, 1)
      return 
    }

    return console.log(`Item ${item} is not in the storage list`);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
console.log(storage)

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]