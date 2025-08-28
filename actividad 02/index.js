const ProductManager = require("./ProductManager");

const manager = new ProductManager("./products.json");

console.log("Todos los productos:", manager.getProducts());
console.table(manager.getProducts());

console.log("Producto con ID 1:", manager.getProductById(1));
console.table(manager.getProductById(1));

console.log("Producto con ID 2:", manager.getProductById(2)); 
console.table(manager.getProductById(2));
