
 function myFunction(x) {
	if (x.matches) { // If media query matches
		
		$(".collapse").collapse('hide');
	} else {
		
		$(".collapse").collapse('show');
	}
  }
  
  var x = window.matchMedia("(max-width: 576px)")
  myFunction(x) // Call listener function at run time


