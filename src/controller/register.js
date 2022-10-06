function domID(id) {
  return document.getElementById(id);
}

var validation = new Validation();

document.getElementById("submit").addEventListener("click", function () {
  let email = domID("email").value;
  let pass = domID("Pass").value;
  let repass = domID("rePass").value;
  let name = domID("name").value;
  let phone = domID("phone").value;
  let gender = domID("male").checked;

  let isValid = true;

  //email
  isValid &=
    validation.checkEmpty(email, "errorEmail", "(*)Không được để trống") &&
    validation.checkEmail(email, "errorEmail", "(*)Phải đúng định dạng");

  //pass
  isValid &=
    validation.checkEmpty(pass, "errorPass1", "(*)Không được để trống") &&
    validation.checkPass(pass, "errorPass1", "(*)Phải đúng định dạng");

  isValid &=
    validation.checkEmpty(repass, "errorPass2", "(*)Không được để trống") &&
    validation.checkSamePass(
      pass,
      repass,
      "errorPass2",
      "(*)Mật khẩu chưa khớp"
    );

  //name
  isValid &=
    validation.checkEmpty(name, "errorName", "(*)Không được để trống") &&
    validation.checkName(name, "errorName", "(*)Không được chứa số");

  //phone
  isValid &=
    validation.checkEmpty(phone, "errorPhone", "(*)Không được để trống") &&
    validation.checkPhone(phone, "errorPhone", "(*)Không được chứa chữ cái");

  if (isValid) {
    var member = new Member(email, repass, name, gender, phone);
    postData(member);
  }
});

function postData(member) {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: {
      email: `${member.email}`,
      password: `${member.repass}`,
      name: `${member.name}`,
      gender: `${member.gender}`,
      phone: `${member.phone}`,
    },
  });

  promise.then(function (result) {
    console.log(result);
  });

  promise.catch(function (error) {
    console.log(error);
  });
}
