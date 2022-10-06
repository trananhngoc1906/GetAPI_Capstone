const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(function getDetail() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=1",
    method: "GET",
  });

  promise.then(function (result) {
    renderDetail(result);
    renderRelate(1, result, 0);
    renderRelate(2, result, 1);
    renderRelate(3, result, 2);
    renderRelate(4, result, 2);
    renderRelate(5, result, 1);
    renderRelate(6, result, 0);
  });

  promise.catch(function (error) {
    console.log(error);
  });
})();

function renderDetail(result) {
  $("#productImage").src = result.data.content["image"];

  $("#productName").innerHTML = result.data.content["name"];
  $("#productDesc").innerHTML = result.data.content["description"];
  $("#productSize1").innerHTML = result.data.content["size"][0];
  $("#productSize2").innerHTML = result.data.content["size"][1];
  $("#productSize3").innerHTML = result.data.content["size"][2];
  $("#productSize4").innerHTML = result.data.content["size"][3];
  $("#productSize5").innerHTML = result.data.content["size"][4];
  $("#productPrice").innerHTML = `${result.data.content["price"]}$`;
}

function renderRelate(number, result, index) {
  $(
    `#img${number}`
  ).src = `${result.data.content.relatedProducts[index]["image"]}`;
  $(`#name${number}`).innerHTML =
    result.data.content.relatedProducts[index]["name"];
  $(`#des${number}`).innerHTML =
    result.data.content.relatedProducts[index]["description"];
  $(
    `#price${number}`
  ).innerHTML = `${result.data.content.relatedProducts[index]["price"]}$`;
}
