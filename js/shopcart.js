window.onload=function(){
	var chbAlla=document.querySelector(".cart_table_th>.th_tck>input");
	var chbAllb=document.querySelector(".float_barholder>.th_tck>input");
	var chbs=document.querySelectorAll(
	".item_content>.th_tck>input"	);
// 全选
	// 上面多选
	chbAlla.onclick=function(){
		chbAllb.checked=chbAlla.checked;
		for(var chb of chbs){
			chb.checked=chbAlla.checked;
		}
	};
	//下面多选
	chbAllb.onclick=function(){
		chbAlla.checked=chbAllb.checked;
		for(var chb of chbs){
			chb.checked=chbAllb.checked;
		}
	};
	
	for(var chb of chbs){
		chb.onclick=function(){
			var chb=this;
			// 如果当前chb是未选中
			if (chb.checked===false) {
				// chbAlla和chbAllb一定不选中
				chbAlla.checked=false;
				chbAllb.checked=false;
			} else {//否则(当前这一个chb是选中的)
				//查找未选中的chb
				var unchecked=document.querySelector(".item_content>.th_tck>input:not(:checked)");
				//如果找不到
				if (unchecked===null) {
					//chbAlla和chbAllb一定选中
					chbAlla.checked=true;
					chbAllb.checked=true;
				}
			}
		}
	}
// 添加数量
	var oDivs=document.querySelectorAll(".box_btn>div");
	for(var div of oDivs){
		var sums=document.querySelectorAll(".th_sum>.sum");
			var total=0;
			for (var sum of sums){
				total+=parseFloat(sum.innerHTML);
			}
			document.querySelector(".total .pieces_total").innerHTML=total.toFixed(2);
		div.onclick=function(){
			var div=this;
			var input=div.parentNode.children[1];
			var n=parseInt(input.value);
			if(div.className=="add"){
				n++;//n+1
			}else if(n>1){//否则,如果n>1(btn的内容是-)
				n--;//n-1
			}
			input.value=n;
// 计算小计
			var span=div.parentNode.parentNode.previousElementSibling.children[0];
			var price=parseFloat(span.innerHTML);
			var sum=price*n;
			div.parentNode.parentNode.nextElementSibling.children[0].innerHTML=sum.toFixed(2);
// 计算总计
			var sums=document.querySelectorAll(".th_sum>.sum");
			var total=0;
			for (var sum of sums){
				total+=parseFloat(sum.innerHTML);
			}
			document.querySelector(".total .pieces_total").innerHTML=total.toFixed(2);
		}
	}
// 删除
	var deles=document.querySelectorAll(".th_op>.dele_btn");
	for(var dele of deles){
		dele.onclick=function(){
			var dele=this;
			if (confirm("你确定要删除吗?")) {
				var self=dele.parentNode.parentNode;
				self.parentNode.removeChild(self);
			}
		}
	}
// 批量删除
	var qdel=document.querySelector(".batch_deletion>.batch_dele_btn");
	qdel.onclick=function(){
		var qdel=this;
		var check=document.querySelectorAll(".item_content>.th_tck>input:checked");
		if (check.length>0) {//选中的有
			if (confirm("你确定要删除吗?")) {
				for(var chec of check){
					console.log(chec);
					var self=chec.parentNode.parentNode.parentNode;
					self.parentNode.removeChild(self);
				}
			}
		} else {
			alert("请选择要删除的商品");
		}
		var sums=document.querySelectorAll(".th_sum>.sum");
			var total=0;
			for (var sum of sums){
				total+=parseFloat(sum.innerHTML);
			}
			document.querySelector(".total .pieces_total").innerHTML=total.toFixed(2);
	}
// 结算
	var balance=document.querySelector(".balance");
	balance.onclick=function(){
		var span=document.querySelector(".pieces_total").innerHTML;
		document.querySelector(".alertdiv").style.display="block";
		document.querySelector(".payprice").innerHTML=span;
	}
	var close=document.querySelector(".close");
	close.onclick=function(){
		this.parentNode.style.display="none";
	}
}