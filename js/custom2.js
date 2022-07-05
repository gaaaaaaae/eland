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
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll > 20){
      $(".upBtn").css("display","block");
    }else{
      $(".upBtn").css("display","none");
    }
  });

  //top버튼 클릭시
  $(".upBtn").click(function(){
    $(window).scrollTop(0);
  });
  
})