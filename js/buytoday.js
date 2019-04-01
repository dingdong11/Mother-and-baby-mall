$('.tab_title>span').on('click',function(){
	// console.log($('.tab_title>span')[0]);
	var $span=$(this);
	//第三种
	// $(".tab_title>span.active").removeClass('active').siblings().addClass('active');
	// $(".tab_title~div:hidden").attr("display","block").sibling("div:visible").attr("display","none");
	//第二种
/*	$(".tab_title>span.active").removeClass('active').siblings().addClass('active');
	$(".tab_title~div.d_block").removeClass('d_block').siblings().addClass('d_block');
	$('.tab_title').removeClass('d_block');*/
	// 第一种text()=="今日团购"
	if ($span.text()=="今日团购") {
		$span.attr("class","active").next().attr("class","");
		$(".today").addClass("d_block").next().attr("class","tomorrow");
	} else {
		$span.attr("class","active").prev().attr("class","");
		$(".tomorrow").addClass("d_block").prev().attr("class","today");
	}
})
