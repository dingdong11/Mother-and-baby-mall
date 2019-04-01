$(function(){
	$(".category_banner ul li").hover(function(){
		var $li=$(this);
		// clearInterval(timer);
		$(".category_banner .fore_banner").eq($(this).index()).show().siblings(".fore_banner").hide();
	}).mouseleave(function(){
		$(".category_banner .fore_banner").css("display","none");
	});
	$(".category_banner .fore_banner").mouseenter(function(){
		$(this).css("display","block");
	}).mouseleave(function(){
		$(this).css("display","none");
	})
	// 轮播图
	$(".floors .sk_bd>button").on("click",function(){
		// var $btn=$(this);
		// var $ulWidth="-"+$btn.prev().children("ul").width()+"px";
		// var $ulRight=parseInt($btn.prev().css("right"));
		// 	if ($ulRight>=-2) {
		// 		$btn.prev().css("left",0);
		// 	}else{
		// 		$btn.prev().css("left",$ulWidth);
		// 	}
		var $btn=$(this);
		$("ul.left_box").fadeToggle();
	})
	setInterval(function(){
		$("ul.left_box").fadeToggle();
	},5000)
})