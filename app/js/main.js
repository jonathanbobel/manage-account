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

	//Tooltip functionality 
	$('[data-toggle="tooltip"]').tooltip();

	 // Set current year as max for birthday 
	var today = new Date();
	var yyyy = today.getFullYear();
	document.getElementById("dateOfBirthYear").setAttribute("max", yyyy);

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