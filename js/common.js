$("#redlogo").hide()
$("#gnb").on('mouseenter',function(){
  $("#header").stop().animate({height:400})
  $("#gnb > ul > li > a").css({color:"#000"})
  $("#redlogo").show()
})
$("#gnb").on('mouseleave',function(){
  $("#header").stop().animate({height:82})
  $("#gnb > ul > li > a").css({color:"#fff"})
  $("#redlogo").hide()
})
