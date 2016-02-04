$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });
  $("p").dblclick(function() {
    alert("This is a paragraph.");
  });
  $("img").hover(function() {
    alert("This is an image.");
  });
});
