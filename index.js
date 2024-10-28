let products = null;
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(products);
    addDataToHTML();
  });
let listProduct = document.querySelector(".listProduct");

function addDataToHTML() {
  if (products && Array.isArray(products)) {
    products.forEach((product) => {
      let new_product = document.createElement("a");
      new_product.href = "/detail.html?id=" + product.id;
      new_product.classList.add("item");

      new_product.innerHTML = `
      <img src = "${product.img}">
      <h2 class = "name">${product.name}</h2>
      <div class = "prod_price">${product.price}</div>`;

      if (product.invetory == 0) {
        new_product.innerHTML = `
        <img src = "${product.img}">
      <h2 class = "name">${product.name}</h2>
      <div class = "prod_price">${product.price}</div>
        <h2 class = "instock">!Not in Stock</h2>`;
      }

      listProduct.appendChild(new_product);
    });
  }
}
