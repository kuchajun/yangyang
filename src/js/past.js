var $rotate=true;
$(".coption").click(function(){
	if($rotate){
		//下拉向上旋转
		$(this).find("img").addClass("imgrotate");
		//隐藏选项显示
		$(".option").css("display","flex");
	}
})