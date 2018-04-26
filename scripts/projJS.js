 function contSize(){
	$(".cont").each(function (){
		var left = $(this).find(".left");
		var right = $(this).find(".right");
		var lefth3_height = $(left).find("h3").height();
		var leftp_height= $(left).find("p").height();
		var right_height= $(right).height();
		$(left).height(Math.max(lefth3_height+leftp_height, right_height));
		$(right).height(Math.max(lefth3_height+leftp_height, right_height));
		var left_side_height = 0;
		if($(left).height() == lefth3_height+leftp_height){
			left_side_height = $(left).height()+2*parseFloat($(left).css("margin-top"));
		} else{
			left_side_height = right_height+2*parseFloat($(right).css("margin-top"));
		}
		$(this).height(left_side_height);
	});
} 
$(document).ready(function(){
	$(".wrapper").addClass("load");
	contSize();	
});
