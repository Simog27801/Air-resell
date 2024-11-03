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
      new_product.href = "detail.html?id=" + product.id;
      new_product.classList.add("item");

      new_product.innerHTML = `
      <img src = "${product.img}">
      <h2 class = "name" translate="no">${product.name}</h2>
      <div class = "prod_price">${product.price}</div>
      <div class = "buttons" translate="no">
        <a href="https://www.vinted.it/member/233493016-gorzasimo">
        <button>
          <span>
          <img src="images/vinted-logo.png" alt="vinted-logo" />
          </span>
          Check Out
        </button>
        </a>
      </div>`;

      if (product.invetory == 0) {
        new_product.innerHTML = `
        <img src = "${product.img}">
      <h2 class = "name" translate="no">${product.name}</h2>
      <div class = "prod_price">${product.price}</div>
        <h2 class = "instock">!Not in Stock</h2>
        <div class = "buttons">
        <a href="https://www.vinted.it/member/233493016-gorzasimo">
          <button>
                <span>
                  <img src="images/vinted-logo.png" alt="vinted-logo" />
                </span>
                Check Out
          </button>
          </a>
        </div>`;
      }

      listProduct.appendChild(new_product);
    });
  }
}
