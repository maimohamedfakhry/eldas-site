var alllist = $(".div-shadow");
alllist.eq(0).css("backgroundColor", "rgba(51, 51, 153, 0.4)");
alllist.eq(1).css("backgroundColor", "rgba(51, 51, 153, 0.4)");
alllist.eq(2).css("backgroundColor", "rgba(230, 57, 0 , 0.4);");
alllist.eq(3).css("backgroundColor", "rgba(96, 39, 114 , 0.4)");
alllist.eq(4).css("backgroundColor", "rgba(0, 77, 0 , 0.4)");
alllist.eq(5).css("backgroundColor", "rgba(102, 0, 0 , 0.4)");
//////////////////////////////////////////////////////////////////////
$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionPlace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionPlace }, 1000);
});
$(".lnk").click(function () {
  var sectionID = $(this).attr("href");
  var sectionPlace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionPlace }, 1000);
});
$(".arrowfont").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
$(window).scroll(function () {
  var aboutplace = $("#portofolio").offset().top;
  var navHeight = $(".navbar").outerHeight(true);
  var myscrollvalue = $(window).scrollTop();
  if (myscrollvalue > aboutplace - navHeight) {
    $("nav").addClass("bg-navcolor");
    $(".arrowfont").fadeIn(500);
  } else {
    $("nav").removeClass("bg-navcolor");
    $(".arrowfont").fadeOut(500);
  }
});
