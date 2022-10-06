const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(function getData() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise.then(function (result) {
    renderItem(1, result);
    renderItem(2, result);
    renderItem(3, result);
    renderItem(4, result);
    renderItem(5, result);
    renderItem(6, result);
  });

  promise.catch(function (error) {
    console.log(error);
  });
})();

function renderItem(id, result) {
  $(`#img${id}`).src = `${result.data.content[id - 1]["image"]}`;
  $(`#name${id}`).innerHTML = result.data.content[id - 1]["name"];
  $(`#des${id}`).innerHTML = result.data.content[id - 1]["description"];
  $(`#price${id}`).innerHTML = `${result.data.content[id - 1]["price"]}$`;
}
