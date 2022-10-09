// (function getDetail() {
//   let promise = axios({
//     url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=1",
//     method: "GET",
//   });

//   promise.then(function (result) {
//     renderDetail(result);
//     renderRelate(1, result, 0);
//     renderRelate(2, result, 1);
//     renderRelate(3, result, 2);
//     renderRelate(4, result, 2);
//     renderRelate(5, result, 1);
//     renderRelate(6, result, 0);
//   });

//   promise.catch(function (error) {
//     console.log(error);
//   });
// })();

// function renderDetail(result) {
//   $("#productImage").src = result.data.content["image"];

//   $("#productName").innerHTML = result.data.content["name"];
//   $("#productDesc").innerHTML = result.data.content["description"];
//   $("#productSize1").innerHTML = result.data.content["size"][0];
//   $("#productSize2").innerHTML = result.data.content["size"][1];
//   $("#productSize3").innerHTML = result.data.content["size"][2];
//   $("#productSize4").innerHTML = result.data.content["size"][3];
//   $("#productSize5").innerHTML = result.data.content["size"][4];
//   $("#productPrice").innerHTML = `${result.data.content["price"]}$`;
// }

// function renderRelate(number, result, index) {
//   $(
//     `#img${number}`
//   ).src = `${result.data.content.relatedProducts[index]["image"]}`;
//   $(`#name${number}`).innerHTML =
//     result.data.content.relatedProducts[index]["name"];
//   $(`#des${number}`).innerHTML =
//     result.data.content.relatedProducts[index]["description"];
//   $(
//     `#price${number}`
//   ).innerHTML = `${result.data.content.relatedProducts[index]["price"]}$`;
// }

function getApiDetail() {
  //lay du lieu tham so (param) tu url (duong dan phia tren trinh duyet)
  var urlParam = new URLSearchParams(window.location.search);
  var id = urlParam.get("id");

  let promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    method: "GET",
  });

  promise.then(function (result) {
    let itemDetail = result.data.content;
    let content = `
 <div class="carousel__left">
  <div class="carousel__left--content">
    <img src="${itemDetail.image}" alt="">
  </div>
</div>
<div class="carousel__right">
  <div class="carousel__right--content">
    <div class="carousel__right--name">${itemDetail.name}</div>
    <div class="carousel__right--text">${itemDetail.description}</div>
    <div class="carousel__right--avai">Available size</div>
    <div class="carousel__right--size">
      <div class="size">${itemDetail.size[0]}</div>
      <div class="size">${itemDetail.size[1]}</div>
      <div class="size">${itemDetail.size[2]}</div>
      <div class="size">${itemDetail.size[3]}</div>
      <div class="size">${itemDetail.size[4]}</div>
    </div>
    <div id="productPrice" class="carousel__right--price">
      ${itemDetail.price}$
    </div>
    <div class="carousel__right--updown">
      <span>+</span>
      <span>1</span>
      <span>-</span>
    </div>
         <button class="carousel__right--add">Add to cart</button>
     </div>
</div>`;

    document.querySelector("section.carousel").innerHTML = content;

    //render item related
    console.log(itemDetail.relatedProducts);
    renderItemRelated(itemDetail.relatedProducts);
  });

  promise.catch(function (error) {
    console.log(error);
  });
}

getApiDetail();

function renderItemRelated(arr) {
  let content = ``;
  for (let index = 0; index < arr.length; index++) {
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
              </div>
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
              </div>     
              
              
              `;
  }

  document.querySelector("#product__content").innerHTML = content;
}
