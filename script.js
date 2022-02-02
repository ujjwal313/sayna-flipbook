$("#flipbook").turn({
  gradients: true,
  acceleration: true,
  autoCenter: true,
  display: "single",
  width: 400,
  height: 400,
  elevation: 80,
});

$("#first-btn").click(function () {
  $("#flipbook").turn("page", 1);
});
$("#prev-btn").click(function () {
  $("#flipbook").turn("previous");
});
$("#next-btn").click(function () {
  $("#flipbook").turn("next");
});

if ($(window).width() >= 768) {
  $("#flipbook").turn("display", "double");
}
