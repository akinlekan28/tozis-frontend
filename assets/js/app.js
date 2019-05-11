jQuery(document).ready(function() {
  "use strict";
  $(window).on("load", function() {
    $("#preloader").fadeOut(500);
  });
  $(".select-drop").selectbox();
  $(window).on("load", function() {
    $("#body").each(function() {
      var header_area = $(".nav-wrapper");
      var main_area = header_area.find(".navbar");
      var main_area_fullwidth = $(".navbar.navbar-fullwidth");
      $(window).scroll(function() {
        if (
          main_area.hasClass("navbar-sticky") &&
          ($(this).scrollTop() <= 400 || $(this).width() <= 750)
        ) {
          main_area.removeClass("navbar-sticky").appendTo(header_area);
        } else if (
          !main_area.hasClass("navbar-sticky") &&
          $(this).width() > 750 &&
          $(this).scrollTop() > 400
        ) {
          header_area.css("height", header_area.height());
          main_area.css({ opacity: "0" }).addClass("navbar-sticky");
          main_area.appendTo($("body")).animate({ opacity: 1 });
        }
      });
    });
  });
  $(".navbar a.dropdown-toggle").on("click", function(e) {
    var elmnt = $(this)
      .parent()
      .parent();
    if (!elmnt.hasClass("nav")) {
      var li = $(this).parent();
      var heightParent = parseInt(elmnt.css("height").replace("px", "")) / 2;
      var widthParent = parseInt(elmnt.css("width").replace("px", "")) - 10;
      if (!li.hasClass("open")) {
        li.addClass("open");
      } else {
        li.removeClass("open");
        $(this)
          .next()
          .css("top", heightParent + "px");
        $(this)
          .next()
          .css("left", widthParent + "px");
      }
      return false;
    }
  });
  if ($(".navbar").width() > 1007) {
    $(".nav .dropdown").hover(
      function() {
        $(this).addClass("open");
      },
      function() {
        $(this).removeClass("open");
      }
    );
  }
  $('.scrolling  a[href*="#"]').on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr("href");
    $(target).velocity("scroll", {
      duration: 800,
      offset: -150,
      easing: "easeOutExpo",
      mobileHA: false
    });
  });
  $(".scrolling").click(function() {
    $("html, body").animate(
      { scrollTop: $("#message").offset().top - 50 },
      600
    );
  });
  (function() {
    $("#thubmnailSlider").carousel({ interval: 3000 });
  })();
  (function() {
    $(".thumbnailCarousel .item").each(function() {
      var itemToClone = $(this);
      var i = 1;
      if ($(window).width() <= 767) {
        for (i = 1; i < 1; i++) {
          itemToClone = itemToClone.next();
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(":first");
          }
          itemToClone
            .children(":first-child")
            .clone()
            .addClass("cloneditem-" + i)
            .appendTo($(this));
        }
      } else if ($(window).width() <= 991) {
        for (i = 1; i < 2; i++) {
          itemToClone = itemToClone.next();
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(":first");
          }
          itemToClone
            .children(":first-child")
            .clone()
            .addClass("cloneditem-" + i)
            .appendTo($(this));
        }
      } else {
        for (i = 1; i < 3; i++) {
          itemToClone = itemToClone.next();
          if (!itemToClone.length) {
            itemToClone = $(this).siblings(":first");
          }
          itemToClone
            .children(":first-child")
            .clone()
            .addClass("cloneditem-" + i)
            .appendTo($(this));
        }
      }
    });
  })();
  $(document).on("click", ".browse", function() {
    var file = $(this)
      .parent()
      .parent()
      .parent()
      .find(".file");
    file.trigger("click");
  });
  var $heroSlider = $(".main-slider .inner");
  if ($heroSlider.length > 0) {
    $heroSlider.each(function() {
      var loop = $(this)
          .parent()
          .data("loop"),
        autoplay = $(this)
          .parent()
          .data("autoplay"),
        interval =
          $(this)
            .parent()
            .data("interval") || 3000;
      $(this).owlCarousel({
        items: 1,
        loop: loop,
        margin: 0,
        nav: true,
        dots: false,
        navText: [],
        autoplay: autoplay,
        autoplayTimeout: interval,
        autoplayHoverPause: true,
        smartSpeed: 700
      });
    });
  }
  var heroSlider2 = $(".banner-home-city .owl-carousel");
  heroSlider2.owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeOut: 5000,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right " aria-hidden="true"></i>'
    ]
  });
  var owl = $(".owl-carousel.partnersLogoSlider");
  owl.owlCarousel({
    loop: true,
    margin: 28,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    smartSpeed: 500,
    responsive: {
      320: { slideBy: 1, items: 1 },
      768: { slideBy: 1, items: 3 },
      992: { slideBy: 1, items: 4 }
    }
  });
  $(".testimonial-slider").owlCarousel({
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    responsive: {
      320: { slideBy: 1, items: 1 },
      768: { slideBy: 1, items: 1 },
      992: { slideBy: 1, items: 3 }
    }
  });
  $(".close-btn").click(function() {
    $(this)
      .parent()
      .hide();
  });
});
