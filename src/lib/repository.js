import cuid from "cuid";
// #items;
class Repository {
  constructor() {
    this.items = [];
  }
  
  add(title) {
    const item = {
      id: cuid(),
      title: title,
    };
    this.items.push(item);
    this.save();
    return item.id;
  }
  getById(id) {
    return this.items.find((item) => item.id === id);
  }
  getItems() {
    return this.items;
  }
  removeById(id) {
    this.items = this.items.filter((p) => p.id !== id);
    this.save();
  }

  save() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  restore() {
    this.items = JSON.parse(localStorage.setItem('items'));
  }
}

export { Repository };