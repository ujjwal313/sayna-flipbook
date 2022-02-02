$("#flipbook").turn({
  gradients: true,
  acceleration: true,
  autoCenter: true,
  display: "single",
  elevation: 120,
  height: 400,
  width: 400,
});

if ($(window).width() >= 768) {
  $("#flipbook").turn("display", "double");
  $("#flipbook").turn("size", 600, 600);
}

$("#first-btn").click(function () {
  $("#flipbook").turn("page", 1);
});
$("#prev-btn").click(function () {
  $("#flipbook").turn("previous");
});
$("#next-btn").click(function () {
  $("#flipbook").turn("next");
});
