//图片自适应宽高
function imgonload(obj,x,y){
	var $scale=x/y;
	var $width=$(obj).width();
	var $height=$(obj).height();
	var $newscale=$width/$height;
	if($newscale>=$scale){
		$(obj).css("height","100%");
	}else if($newscale<$scale){
		$(obj).css("width","100%");
	}
}