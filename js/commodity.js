$(function(){
	// 左边手风琴菜单
	// $("div.content_list:gt(0)").hide();
	$("div.list_box").on("click",".title_list",function(){
		var $title_list=$(this);
		if ($title_list.next().is(":visible")) {
			$title_list.css("background-position","8px -40px").next().slideUp();
		} else {
			$title_list.css("background-position","8px -2px").next().slideDown();
		}
	});
	// 按钮组效果
	$(".sort>a:first").css ({
		"border-radius":"5px 0 0 5px",
		"background-position":"50px -25px"
	});
	$(".sort>a:last").css("border-radius","0 5px 5px 0");
	$(".sort>a:gt(0)").css("border-left","0");
	$(".sort").on("click",function(e){
		var $a=$(e.target);
		// console.log($a);
		if ($a.css("background-position")=="50px 2px"){
			$a.css("background-position","50px -25px").siblings().css("background-position","50px 2px")
		}
	})
})