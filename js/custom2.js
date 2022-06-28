$(function(){
  $(".gnb > li").mouseover(function(){
    $(this).find(".sub").css("display","flex");
    $(".reservation hr").css("display","none");
  })
  $(".gnb > li").mouseout(function(){
    $(this).find(".sub").css("display","none");
    $(".reservation hr").css("display","block");
  })

  //window객체에 스크롤이벤트 발생시
  $(window).scroll(function(){//window객체에 스크롤 이벤트 발생
    var scroll = $(window).scrollTop();//변수 scroll에 현재 스크롤한 만큼의 거리를 저장
    console.log(scroll);
    if(scroll > 20){//스크롤이동값이 20보다 클때 구문실행
      $(".upBtn").css("display","block");
    }else{//스크롤이동값이 20보다 작을때 구문실행
      $(".upBtn").css("display","none");//버튼요소를 화면에서 제거
    }
  });

  //top버튼 클릭시
  $(".upBtn").click(function(){
    $(window).scrollTop(0);//window객체의 스크롤위치값을 0(페이지상단)으로 설정
  });
  
})