const fs = require("fs");

class ProductManager {
  products = [];
  path = "";
  currentId = 1;

  constructor(path) {
    this.path = path;

    if (fs.existsSync(this.path)) {
      const data = fs.readFileSync(this.path, "utf-8");
      this.products = JSON.parse(data);

      if (this.products.length > 0) {
        this.currentId = this.products[this.products.length - 1].id + 1;
      }
    } else {
      fs.writeFileSync(this.path, "[]");
    }
  }

  saveProductsToFile() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2));
  }

  addProduct(product) {
    const { title, description, price, stock } = product;

    if (!title || !description || !price || !stock) {
      console.error("Todos los campos son obligatorios");
      return;
    }

    const newProduct = {
      id: this.currentId++,
      title,
      description,
      price,
      stock,
    };

    this.products.push(newProduct);
    this.saveProductsToFile();
    console.log("Producto agregado:", newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      console.error("Not found");
      return {};
    }
    return product;
  }
}

module.exports = ProductManager;
