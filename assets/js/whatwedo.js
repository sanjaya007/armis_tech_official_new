$(window).on("load", function () {
  let elementHeight;

  // get elementHeight
  const infoHeight = $(".scroll-info")[0].getBoundingClientRect().height;
  elementHeight = infoHeight;

  // update height on resize
  $(window).on("resize", function () {
    const elementHeight = $(".scroll-info")[0].getBoundingClientRect().height;
  });

  // scroll product container
  $(".scroll-wrapper").on("scroll", function () {
    const currentPosition = $(this).scrollTop();
    if (currentPosition === 0) {
      $(".scroll-product-logo").removeClass("active");
      $("#firstScrollProductLogo").addClass("active");
    } else {
      $(".scroll-product-logo").removeClass("active");
      $("#secondScrollProductLogo").addClass("active");
    }
  });

  // scroll click functionality
  $(".scroll-product-logo").on("click", function () {
    const scrollId = $(this).attr("data-scroll-count");
    $(".scroll-info").removeClass("snap-active");
    $(".scroll-wrapper").animate(
      { scrollTop: elementHeight * scrollId },
      500,
      function () {
        $(".scroll-info").addClass("snap-active");
      }
    );
  });

  //   mobile product container
  $(".mobile-product-logo").on("click", function (e) {
    const currentId = $(this).attr("data-active");

    $(".mobile-product-logo").removeClass("active");
    $(this).addClass("active");

    $(".mobile-product-info").hide();
    $(`#${currentId}`).fadeIn();
  });
});
