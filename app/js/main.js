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

});