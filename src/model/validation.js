function Validation() {
  this.checkEmpty = function (value, idError, mess) {
    if (value.trim() === "") {
      domID(idError).innerHTML = mess;
      domID(idError).style.display = "block";
      return false;
    }
    domID(idError).innerHTML = "";
    domID(idError).style.display = "none";
    return true;
  };

  this.checkEmail = (value, idError, mess) => {
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      domID(idError).innerHTML = "";
      domID(idError).style.display = "none";
      return true;
    }
    domID(idError).innerHTML = mess;
    domID(idError).style.display = "block";
    return false;
  };

  this.checkPass = (value, idError, mess) => {
    var pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(pass)) {
      domID(idError).innerHTML = "";
      domID(idError).style.display = "none";
      return true;
    }
    domID(idError).innerHTML = mess;
    domID(idError).style.display = "block";
    return false;
  };

  this.checkSamePass = (value1, value2, idError, mess) => {
    if (value1 === value2) {
      domID(idError).innerHTML = "";
      domID(idError).style.display = "none";
      return true;
    } else {
      domID(idError).innerHTML = mess;
      domID(idError).style.display = "block";
      return false;
    }
  };

  this.checkName = (value, idError, mess) => {
    let name = /^[0-9]+$/;
    if (value.match(name)) {
      domID(idError).innerHTML = mess;
      domID(idError).style.display = "block";
      return false;
    }
    domID(idError).innerHTML = "";
    domID(idError).style.display = "none";
    return true;
  };

  this.checkPhone = (value, idError, mess) => {
    let phone =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(phone)) {
      domID(idError).innerHTML = mess;
      domID(idError).style.display = "block";
      return false;
    }
    domID(idError).innerHTML = "";
    domID(idError).style.display = "none";
    return true;
  };
}
