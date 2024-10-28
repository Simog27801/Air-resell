let products = null;
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    showDetail();
  });

function showDetail() {
  let detail = document.querySelector(".details");
  let productid = new URLSearchParams(window.location.search).get("id");
  let thisProduct = products.filter((current) => {
    return current.id == productid;
  })[0];
  if (!thisProduct) {
    window.location.href == "/";
  }

  detail.querySelector(".img  img").src = thisProduct.img;
  detail.querySelector(".name").innerText = thisProduct.name;
  detail.querySelector(".price").innerText = thisProduct.price;
  detail.querySelector(".description").innerText = thisProduct.description;
}
