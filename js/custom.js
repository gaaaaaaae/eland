$(function(){
   //article요소에 마우스를 올려놨을 때
   $("article").mouseenter(function(){
    var vid = $(this).find("video").get(0);
    vid.currentTime = 0;
    vid.play();

    //article넓이 12%에서 35%
    $(this).stop().animate({"width":"35%"},1000,function(){
      $(this).find("h3").stop().animate({"right":"10px"},400);
      $(this).find("p").stop().animate({"right":"10px"},800);
    });
    $(this).find("video").stop().animate({"opacity":0.9},1200);
  });

  //article요소에 마우스가 떠났을 때
  $("article").mouseleave(function(){
    var vid = $(this).find("video").get(0);
    vid.pause();

    //article넓이 35%에서 12%
    $(this).stop().animate({"width":"12%"},700)
    $(this).find("video").stop().animate({"opacity":0},2000);
    $(this).find("h3").stop().animate({"right":"-310px"},200);
    $(this).find("p").stop().animate({"right":"-310px"},500);
  });

  var count = 0;
	var scrollEvent = false;
	var delta;
	var artMax = $("section").length-1;
	$("section").on("mousewheel DOMMouseScroll",function(e){
		e.preventDefault();
		var E = e.originalEvent;
		if(E.detail){
			delta = E.detail*-40;
		}else{
			delta = E.wheelDelta;
		}		
		
		//마우스휠을 위로 올렸을 경우
		if(delta>1 && scrollEvent == false && count >=1){
			console.log(delta);
			scrollEvent = true;
			count--;
			var ht = $(window).height()
			$("html,body").animate({"scrollTop":count*ht},500,function(){
				scrollEvent = false;	
			});

		}else if(delta<1 && scrollEvent == false && count < artMax){
			console.log(delta);
			scrollEvent = true;
			count++;
			var ht = $(window).height()
			$("html,body").animate({"scrollTop":ht*count},500,function(){
				scrollEvent = false;	
			})
		}
	});

	$(function(){
    $(window).scrollTop(0);
  });
})

