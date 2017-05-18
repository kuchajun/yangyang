// 控制banner轮播
var mySwiper = new Swiper('.banner',{
	pagination : '.swiper-pagination',

})
// 点击立即参与
$(".content").on("click",".join",function(){

})
// 点击加号
var $nums=5;//最多可购买的份数
var $price=10;//获取商品单价
var num=1;
function add(obj) {
	num=$(".num").val();
	if(num<$nums){
		num++;
		$(".num").val(num);
	}
	changecolor(num);
	total();

}
//点击减号
function sub(obj){
	num=$(".num").val();
	if(num>1){
		num--;
		$(".num").val(num);
	}
	changecolor(num);
	total();
}

// 加减号的颜色
function changecolor(num){
	if(num>1){
		$(".subtract").find("img").attr("src","../img/subtract2.png");
	}else if(num<=1){
		$(".subtract").find("img").attr("src","../img/subtract1.png");
	}

	if(num==$nums){
		$(".add").find("img").attr("src","../img/add1.png");
	}else if(num<$nums){
		$(".add").find("img").attr("src","../img/add2.png");
	}
}
//计算商品总价
function total(){
	num=$(".num").val();
	if(num<1){
		$(".num").val(1);
	}else if(num>$nums){
		$(".num").val($nums);
	}
	num=$(".num").val();
	var $prices=num*$price;
	$(".price").html($prices)
}
