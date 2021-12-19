
function name(){

$(document).ready(function() {

//MOBILE ONE AND MOBILE THREE


//MOBILE TWO
$(".mobile-two .menu-toggle").click(function() {
	$(this).parent().next(".mobile-nav").toggle(0 , "display");
});
});
	}

	function langugetrans(){

	$(document).ready(function(){
		var show_btn=$('.show-modal');
		var show_btn=$('.show-modal');
		//$("#testmodal").modal('show');
		
		  show_btn.click(function(){
			$("#testmodal").modal('show');
		})
	  });
	  
	  $(function() {
			  $('#element').on('click', function( e ) {
				  Custombox.open({
					  target: '#testmodal-1',
					  effect: 'fadein'
				  });
				  e.preventDefault();
			  });
		  });
		}
    // $(function(){
	// 	  var n= "#nav";
	// 	  var no = ".nav-items";
	// 	  $(n).click(function(){
	// 		 if($(no).hasClass("nav-open")){
	// 		   $(no).animate({height:0},300);
	// 		   	setTimeout(function(){
	// 			$(no).removeAttr('style').removeClass("nav-open");
	// 		   },320);
	// 		 }else{
	// 		   var h = $(no).css("height","auto").height();
	// 		   $(no).height(0).animate({height:h},300);
	// 		   setTimeout(function(){
	// 			$(no).removeAttr('style').addClass("nav-open");
	// 		   },320);
	// 		 }
	// 	  });
	// 	});