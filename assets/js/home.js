$(window).on("load", function () {
  const videoUrl = "https://www.youtube.com/watch?v=WxzcD04rwc8";

  const keyWord = "watch?v=";
  const textLength = keyWord.length;
  const indexPosition = videoUrl.indexOf(keyWord) + textLength;
  const slicedPart = videoUrl.slice(indexPosition);

  $("#videoFrame").attr("src", `https://www.youtube.com/embed/${slicedPart}`);
});
