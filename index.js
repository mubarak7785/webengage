function myFunc() {
  email = document.querySelector("#email").value;
  code = document.querySelector("#code").value;
  number = document.querySelector("#number").value;
  var count = 0;
  for (i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      count++;
    }
  }
 
  if (email == "" || number == "") {
    alert("Input fields can't be empty");
  } else if (email != "" || number != "") {
    if (count == 0 || count > 1 || email.length <= 3) {
      alert("You have entered an invalid email address");
      flag = 2;
    } else if (number.length > 10 || number.length < 10) {
      alert("You have entered an invalid Mobile number");
      flag = 3;
    }
    else{
       var obj={
        email:email,
        code:code,
        number:number
       }
       localStorage.setItem("web_engage",JSON.stringify(obj))
       alert("done")
    }

  }

}
