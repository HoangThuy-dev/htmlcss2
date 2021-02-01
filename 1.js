 $(function(){
 	// $(window).resize(function(){
 	// 	console.log('bạn vừa thay đổi trình duyệt');
 		if($(window).width() < 576)
 		{
 			$('.menu-top ul li ul').slideUp();
 		}
 	// })
 	$('.navbar-toggleable-xs .navbar-nav .nav-item').bind('touchstart', function(){
 		$(this).children('ul').slideToggle(400);
 	})
 })
