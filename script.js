// $("#flipbook").turn({
//   gradients: true,
//   acceleration: true,
//   autoCenter: true,
//   display: "single",
//   width: 500,
//   height: 400,
// });

// $("#first-btn").click(function () {
//   $("#flipbook").turn("page", 1);
// });

var flipbookEL = document.getElementById("flipbook");

window.addEventListener("resize", function (e) {
  flipbookEL.style.width = "";
  flipbookEL.style.height = "";
  $(flipbookEL).turn("size", flipbookEL.clientWidth, flipbookEL.clientHeight);
});

$(flipbookEL).turn({
  autoCenter: true,
  gradients: true,
  //   display: "single",
});
