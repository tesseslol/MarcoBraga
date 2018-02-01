(function($) {
  "use strict";

  var page = 0;

  // manual carousel controls
  
  $(".page-next").click(function() {
    $(".page-a").eq(page).removeClass("active");
    controlCarosel("right", 2);
    $(".page-a").eq(page).addClass("active");
    $(".carousel").carousel("next");
    return false;
  });
  
  $(".page-prev").click(function() {
    $(".page-a").eq(page).removeClass("active");
    controlCarosel("left", 2);
    $(".page-a").eq(page).addClass("active");
    $(".carousel").carousel("prev");
    return false;
  });

  $("#carosel-1").click(function() {
    page = 0;
    $(".carousel").carousel(page);
    $(".page-a").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  $("#carosel-2").click(function() {
    page = 1;
    $(".carousel").carousel(page);
    $(".page-a").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  $("#carosel-3").click(function() {
    page = 2;
    $(".carousel").carousel(page);
    $(".page-a").removeClass("active");
    $(this).addClass("active");
    return false;
  });

  function controlCarosel(direction, max) {
    var min = 0;
    if (direction == "left") {
        if (page == min) {
            page = max;
        } else {
            page--;
        }
    } else {
        if (page == max) {
            page = min;
        } else {
            page++;
        }
    }
  }
})(jQuery);
