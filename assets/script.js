
 function myFunction(x) {
	if (x.matches) { // If media query matches
		
		$(".collapse").collapse('hide');
	} else {
		
		$(".collapse").collapse('show');
	}
  };
  
  var x;
  
  window.addEventListener("load",function(){
	x = window.matchMedia("(max-width: 576px)");
	myFunction(x);	 
  });


  window.addEventListener("resize",function(){
	x = window.matchMedia("(max-width: 576px)");
	myFunction(x);	 
  });
