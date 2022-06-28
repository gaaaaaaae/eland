$(function(){
   //article요소에 마우스를 올려놨을 때
   $("article").mouseenter(function(){
    //변수 vid에 video요소를 할당.
    var vid = $(this).find("video").get(0);
    //동영상의 재생위치를 처음(0)으로 설정
    vid.currentTime = 0;
    //동영상 재생
    vid.play();

    //article요소의 넓이를 12%에서 35%로 1초에 걸쳐 늘려줍니다.
    $(this).stop().animate({"width":"35%"},1000,function(){
      //article요소의 넓이가 변경된 후 h3와 p요소를 선택하여 영역안쪽으로 이동시켜줍니다.
      $(this).find("h3").stop().animate({"right":"10px"},400);
      $(this).find("p").stop().animate({"right":"10px"},800);
    });
    //mouseenter이벤트가 적용된 article요소의 자식인 video요소를 선택하여 투명도를 0.9로 1.2초에 걸쳐 변경하여 서서히 나타나도록 합니다.
    $(this).find("video").stop().animate({"opacity":0.9},1200);
  });

  //article요소에 마우스가 떠났을 때
  $("article").mouseleave(function(){
    //변수 vid에 video요소를 할당.
    var vid = $(this).find("video").get(0);
    //동영상을 정지
    vid.pause();

    //article요소의 넓이를 35%에서 12%로 0.7초에 걸쳐 늘려줍니다.
    $(this).stop().animate({"width":"12%"},700)
    //mouseleave이벤트가 적용된 article요소의 자식인 video요소를 선택하여 투명도를 0으로 2초에 걸쳐 변경하여 서서히 사라지도록 합니다.
    $(this).find("video").stop().animate({"opacity":0},2000);
    //마우스가 벗어났을 시에 해당요소를 바로 초기화 시키기 위해 callback이 아닌 일반 animate구문에서 설정하여 오른쪽 밖으로 위치시켜줍니다.
    $(this).find("h3").stop().animate({"right":"-310px"},200);
    $(this).find("p").stop().animate({"right":"-310px"},500);
  });

  var count = 0;//콘텐츠 요소의 순번
	var scrollEvent = false; //스크롤 이벤트가 중복으로 적용되지 않고 한번씩만 실행될 수 있도록 해주기위한 변수
	var delta; //마우스 휠 이벤트가 발생했을때 반환되는 값을 담기 위한 변수(위 = 120, 아래 = -120)
	var artMax = $("section").length-1;//article의 갯수를 번수에 할당(인덱스번호와 같게 설정하기 위해 -1설정)
	$("section").on("mousewheel DOMMouseScroll",function(e){
	//article요소에 마우스휠 이벤트 생성
		e.preventDefault();//브라우저기능을 차단, 스크립트와 브라우저 간의 휠기능 간섭을 막아줌
		var E = e.originalEvent;//변수에 mousewheel이벤트의 originalEvent값을 할당.
		if(E.detail){//파이어폭스용
			delta = E.detail*-40;
		}else{//그 외 브라우저용
			delta = E.wheelDelta;
		}
		//파이어폭스 외 브라우저는 값이 120, -120으로 반환되지만 파이어폭스의 경우 -3, 3으로 반환됩니다. 값을 동일하게 맞춰주기 위해 -40을 곱하여 변수 delta에 할당합니다.
		
		
		//마우스휠을 위로 올렸을 경우
		if(delta>1 && scrollEvent == false && count >=1){
			//delta변수값이 1보다 크고 scrollEvent변수값이 false이고 count변수값이 1보다 크거나 같을때 실행
			console.log(delta);//콘솔창에 delta 값 출력
			scrollEvent = true;//scrollEvent변수를 ture로 할당하여 animate함수가 종료되기 전까지 중복 적용되지 않도록 해준다.
			count--;//count(순번)변수값에 1을 빼서 다시 count변수에 할당
			var ht = $(window).height()//ht변수에 브라우저의 높이값을 할당
			$("html,body").animate({"scrollTop":count*ht},500,function(){
				scrollEvent = false;//animate함수가 종료된 후에 다시 이벤트가 실행될수 있도록 scrollEvent값을 false로 변경	
			});
			//브라우저의 스크롤위치를 count*ht값으로 애니메이션 효과 적용
		//마우스 휠을 아래로 내렸을 경우	
		}else if(delta<1 && scrollEvent == false && count < artMax){//delta값이 1보다 작고 scrollEvent값이 false이고 count변수가 aritcle의 갯수보다 작을때 실행
			console.log(delta);
			scrollEvent = true;//위와 동일
			count++; //count변수에 1을 더해서 다시 count변수에 저장
			var ht = $(window).height()//ht변수에 브라우저의 높이값을 할당
			$("html,body").animate({"scrollTop":ht*count},500,function(){
				scrollEvent = false;	
			})
		}
	});
})

