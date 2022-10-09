(function getData() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (result) {
    console.log(result.data.content);

    renderItem(result.data.content);
  });

  promise.catch(function (error) {
    console.log(error);
  });
})();

function renderItem(arr) {
  let content = ``;
  for (let index = 0; index < 6; index++) {
    let item = arr[index];
    content += `
    
    <div class="product__item">
              <div class="product__item--content">
                <div  class="product__item--img">
                  <img src="${item.image}" alt="">
              </div>
              <div class="product__item--text">
                <div class="product__item--name">${item.name}
                </div>
                <div class="product__item--descrip">${item.description}
                </div>
              </div>
              <div class="product__item--buy">
                  <div class="product__item--btn"><a href="./detail.html?id=${item.id}">Buy now</a></div>
                  <div class="product__item--price">${item.price}$</div>
              </div>
              </div>
              </div>`;
  }

  document.querySelector("#product__content").innerHTML = content;
}
