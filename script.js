  document.getElementById("submit-form").addEventListener("submit", function (e) {
  var name = document.forms.submitfrm.name.value;
  var email = document.forms.submitfrm.email.value;
  var phone = document.forms.submitfrm.phone.value;
  var message = document.forms.submitfrm.message.value;

  document.getElementById("errorname").textContent = "";
  document.getElementById("erroremail").textContent = "";
  document.getElementById("errorphone").textContent = "";
  document.getElementById("errormessage").textContent = "";

  var hasError = false;

  if(name == "") {
    document.getElementById("errorname").textContent = "Name must be filled out";
    hasError = true;
  }
  if(email == "") {
    document.getElementById("erroremail").textContent = "Email must be filled out";
    hasError = true;
  }
  if(phone == "") {
    document.getElementById("errorphone").textContent = "Phone number must be filled out";
    hasError = true;
  }
  if(message == "") {
    document.getElementById("errormessage").textContent = "Message must be filled out";
    hasError = true;
  }
  if(hasError) {
    e.preventDefault();
    return false;
  }else{
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://script.google.com/macros/s/AKfycbyFOt5keFM9A-fUZIGjchG1RWWxPibVbS37daq1IwjZBvmSGl__ICBGxKMAPp-H3oN41w/exec", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function (){
      if (xhr.status == 200){
        alert("Form submitted successfully");
        window.location.reload();
      }else{
        alert("Something went wrong");
      }
    };

    xhr.onerror=function(){
      alert("Request failed");
    };
    xhr.send(new URLSearchParams(new FormData(document.forms.submitfrm)).toString());
  }
});