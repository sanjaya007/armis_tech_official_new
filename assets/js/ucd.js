$(window).on("load", function () {
  // scroll ucd container
  let elementHeight;
  let firstBoxHeight, secondBoxHeight, thirdBoxHeight;

  // get and check element height
  $(".scroll-info").each(function (index, element) {
    switch (index) {
      case 0:
        firstBoxHeight = element.getBoundingClientRect().height;
        break;
      case 1:
        secondBoxHeight = element.getBoundingClientRect().height;
        break;
      case 2:
        thirdBoxHeight = element.getBoundingClientRect().height;
        break;
    }
  });

  if (firstBoxHeight === secondBoxHeight && firstBoxHeight === thirdBoxHeight) {
    elementHeight = firstBoxHeight;
  }

  // update height on resize
  $(window).on("resize", function () {
    $(".scroll-info").each(function (index, element) {
      switch (index) {
        case 0:
          firstBoxHeight = element.getBoundingClientRect().height;
          break;
        case 1:
          secondBoxHeight = element.getBoundingClientRect().height;
          break;
        case 2:
          thirdBoxHeight = element.getBoundingClientRect().height;
          break;
      }
    });

    if (
      firstBoxHeight === secondBoxHeight &&
      firstBoxHeight === thirdBoxHeight
    ) {
      elementHeight = firstBoxHeight;
    }
  });

  // scroll functionality
  $(".scroll-wrapper").on("scroll", function () {
    const currentPosition = $(this).scrollTop();
    switch (currentPosition) {
      case 0:
        $(".scroll-ucd-list").removeClass("active");
        $("#firstScrollUcdList").addClass("active");
        break;
      case elementHeight:
        $(".scroll-ucd-list").removeClass("active");
        $("#secondScrollUcdList").addClass("active");
        break;
      case elementHeight * 2:
        $(".scroll-ucd-list").removeClass("active");
        $("#thirdScrollUcdList").addClass("active");
        break;
    }
  });

  // scroll click functionality
  $(".scroll-ucd-list").on("click", function () {
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

  //   mobile ucd container
  $(".mobile-ucd-list").on("click", function (e) {
    const currentId = $(this).attr("data-active");

    $(".mobile-ucd-list").removeClass("active");
    $(this).addClass("active");

    $(".mobile-ucd-info").hide();
    $(`#${currentId}`).fadeIn();
  });
});
