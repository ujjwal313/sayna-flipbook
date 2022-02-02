$("#flipbook").turn({
  gradients: true,
  acceleration: true,
  autoCenter: true,
  display: "single",
  width: 500,
  height: 400,
});

$("#first-btn").click(function () {
  $("#flipbook").turn("page", 1);
});
