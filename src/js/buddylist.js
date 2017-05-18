



//弹出底部
$(".content").on("click",".more",function(){
	var $name=$(this).parent().find(".name").html();
	var $content='<div class="edit"><h2>'+$name+'</h2><a href="javascript:;" onclick="editc(this)"><i><img src="../img/editb.png"></i><span>修改备注</span></a><a href="javascript:;" onclick="delfriend(this)"><i><img src="../img/delf.png"></i><span>删除好友</span></a></div>';
	layer.open({
		"className":"itemfoot"
		,content:$content
		,skin: 'footer'
		,yes: function(index){
		  
		}
	});

})
// 编辑备注
function editc(obj){
	console.log("编辑备注");
	location.href="editb.html";
}
// 删除好友
function delfriend(obj){
	console.log("删除好友");
	layer.closeAll();
	layer.open({
		className:'dellayer'
	    ,content: '确定删除好友'
	    ,btn: ['取消', '确定']
	    ,yes: function(index){
	       layer.close(index);
	    }
	    ,no:function(index){
	    	// 确定取消位置调换
	    	
	    }
	  });
}
// 修改备注
function blurbei(obj){
	var $val=$(obj).val();
	if($val!=""){
		$(obj).parent().find("a").show();
		console.log("show")
	}else if($val==""){
		$(obj).parent().find("a").hide();
		console.log("hide")
	}
}
// 清空input
function delinput(obj){
	$(obj).hide().parent().find("input").val('');
}
// 跳转搜索页面
function gosearch(){
	console.log(233)
	location.href="searchf.html";
}