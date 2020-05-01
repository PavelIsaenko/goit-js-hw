const shopDB = {
  name: "Shop #1",
  address: "Kiev",
  items: [{ name: "Test item", price: 100, amount: 2, category: "" }],
  showItems() {
    for (const item of this.items) {
      const { name, price, amount } = item;
      console.log(`${name}: ${price}, ${amount}`);
    }
  },
  addItem(name, price, amount, category) {
    const newItem = { name, price, amount, category };
    this.items.push(newItem);
  },
};
shopDB.addItem(name);
shopDB.showItems();
