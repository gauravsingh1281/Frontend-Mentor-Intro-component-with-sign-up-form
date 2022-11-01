function submitValue() {
  let firstName = $("#fname").val();
  let lastName = $("#lname").val();
  let email = $("#email").val();
  let checkEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  let password = $("#password").val();

  if (firstName==="") {
    $("#fname").addClass("error");
    $(".msg1").removeClass("hidden");
  }
  else{
    $("#fname").removeClass("error");
    $(".msg1").addClass("hidden");
  };
  if (lastName==="") {
    $("#lname").addClass("error");
    $(".msg2").removeClass("hidden");
  }
  else{
    $("#lname").removeClass("error");
    $(".msg2").addClass("hidden");
  };
  if (!checkEmail) {
    $("#email").addClass("error");
    $(".msg3").removeClass("hidden");
  }
  else{
    $("#email").removeClass("error");
    $(".msg3").addClass("hidden");
  };
  if (password==="") {
    $("#password").addClass("error");
    $(".msg4").removeClass("hidden");
  }
  else{
    $("#password").removeClass("error");
    $(".msg4").addClass("hidden");
  };
  
 if((password && firstName && lastName!=="") && checkEmail == true){
    document.location.reload();
 }
 
}
