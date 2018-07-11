$(function() {
    
	//Extend accordion functionality 
	$('label.control.control--radio.panel-title > input[data-toggle="collapse"]').click(function(e){
	  target = $(this).attr('data-target')
	  console.log(target);
	  if ($(target).hasClass('show')) {
	    e.preventDefault(); // to stop the page jump to the anchor target.
	    e.stopPropagation()
	  }
	});

	// Stupid fix for IE11 
	Object.keys = function(obj) {
	    var keys = [];

	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        keys.push(i);
	      }
	    }

	    return keys;
	  };


	//Tooltip functionality 
	$('[data-toggle="tooltip"]').tooltip();

	 // Set current year as max for birthday 
	var today = new Date();
	var yyyy = today.getFullYear();
	var birthYear = document.getElementById("dateOfBirthYear");

	if ($(birthYear).length > 0){
		(birthYear).setAttribute("max", yyyy);
	}

	// Restrict input values 
	 $( "input" ).change(function() {
	   var max = parseInt($(this).attr('max'));
	   var min = parseInt($(this).attr('min'));
	   if ($(this).val() > max)
	   {
	      $(this).val(max);
	   }
	   else if ($(this).val() < min)
	   {
	      $(this).val(min);
	   }       
	 }); 

	 // Slide up success messager if it exists

	 if ( $( ".main-success" ).length ) {

		function slideFade(elem) {
			var fade = { opacity: 0, transition: 'opacity 0.2s' };
			elem.css(fade).slideUp();
		}

		setTimeout(function() {
			slideFade($(".main-success"));
		}, 5000);

	}

	//Scroll and open FAQ element
	if(window.location.hash) {
		var activeHash =  $(location.hash + '.collapsed');
		var posTop = $(activeHash).offset().top;
		$('html,body').animate({
		  scrollTop: posTop - 20 //where 20 is allowance from top of the page
		});
		$(activeHash).removeClass('collapsed').trigger("click");
	}

	// Hide disclaimer for GDPR 
	$('#i-understand, .gdpr a.close').click(function(e){
		var gdprHeight = $('.gdpr').height();
		console.log(gdprHeight);
		$('.gdpr').css("bottom", "-" + gdprHeight + 'px');
	});

	// Redirects Authenticator App Link for Android or iPhone
	$('.control input').click(function() {
		if($('#iPhone').is(':checked')) { 
			$('#appContinue').attr("onclick","window.location.href='iphone-rules.html'");
		}
		else if($('#Android').is(':checked')) { 
			$('#appContinue').attr("onclick","window.location.href='android-rules.html'");
		}
	});

	$('#copyClip').click(function(copyClip) {
	  // Create a "hidden" input
	  var aux = document.createElement("input");
	  // Assign it the value of the specified element
	  var value = document.getElementById("copyClip").innerHTML;
	  aux.setAttribute("value", value);
	  // Append it to the body
	  document.body.appendChild(aux);
	  // Highlight its content
	  aux.select();
	  // Copy the highlighted text
	  document.execCommand("copy");
	  // Remove it from the body
	  document.body.removeChild(aux);
	  // Alert user of success
	  $('#copyClip').tooltip('show');
	  setTimeout(function(){ 
	  	$('#copyClip').tooltip('hide'); 
	  	$('#copyClip').tooltip('disable');
	  }, 2500);
	});

	 // Phone validation 
	//  var telInput = $("#intlPhone"),
	//   errorMsg = $("#error-msg"),
	//   validMsg = $("#valid-msg");

	// // initialise plugin
	// telInput.intlTelInput({
	//   utilsScript: "../../build/js/utils.js"
	// });

	// var reset = function() {
	//   telInput.removeClass("error");
	//   errorMsg.addClass("d-none");
	//   validMsg.addClass("d-none");
	// };

	// // on blur: validate
	// telInput.blur(function() {
	//   reset();
	//   if ($.trim(telInput.val())) {
	//     if (telInput.intlTelInput("isValidNumber")) {
	//       validMsg.removeClass("d-none");
	//     } else {
	//       telInput.addClass("error");
	//       errorMsg.removeClass("d-none");
	//     }
	//   }
	// });

	// // on keyup / change flag: reset
	// telInput.on("keyup change", reset);

});