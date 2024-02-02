


let number = document.getElementById("number");

let submit = document.getElementById("submit");

let flag = 1;

function validateform() {
  if (number.value.length == 10) {
    
    document.getElementById("numbererror").innerText = ""
    flag = 1;

  } else {

    document.getElementById("numbererror").innerText = "Please Enter The Valid Number!!"
    flag = 0;

  }

  if (flag == 1) {
    return true; 
  } else {
    return false;
  }

}

document.addEventListener("DOMContentLoaded", function () {
  let submit = document.getElementById("submit");

  submit.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the values of input fields when the form is submitted
      let email = document.getElementById("mail").value;
      let nameofCustomer = document.getElementById("name").value;
      let phonenumber = document.getElementById("number").value;
      let query = document.getElementById("query").value;

      // Construct the WhatsApp URL
      let whatsappUrl = "https://wa.me/9873350605?text=" +
          "Name of customer: " + encodeURIComponent(nameofCustomer) + "%0a" +
          "Mobile no: " + encodeURIComponent(phonenumber) + "%0a" +
          "Email: " + encodeURIComponent(email) + "%0a" +
          "Query of customer: " + encodeURIComponent(query);

      // Open the WhatsApp URL in a new tab
      window.open(whatsappUrl, "_blank").focus();

      email.innerHTML = "";
  });
});
