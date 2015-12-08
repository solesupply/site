function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(function() {
	$("#email_capture").on("submit", function(event) {
		event.preventDefault();
		$(".submit").addClass("hidden");
		var email = $('.email-input').val();
		$(".email-input").val("");   

	  if (email !== "" && validateEmail(email)) {         
	  	$(".submit-success").removeClass("hidden");	
	  	$("#entry_480650892").val(email);
	  	$("#google").submit();
	  } else {
	  	$(".submit-error").removeClass("hidden");	
	  	return false;
	  }
	})
})