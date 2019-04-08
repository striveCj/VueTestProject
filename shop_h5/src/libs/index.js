function $id(id) {
  return document.getElementById(id);
}

function bindEvent() {
  var sea = $id("my_search");

  var banner = $id("my_banner");

  var height = banner.offsetHeight;

  window.onscroll = function() {
    var top = document.body.scrollTop;

    if (top > height) {
      sea.style.background = "rgba(201,21,35,0.85)";
    } else {
      var op = top / height * 0.85;
      sea.style.background = "rgba(201,21,35," + op + ")";
    }
  };
}

function scrollPic() {
  var imgBox = document.getElementsByClassName("banner_box")[0];
  var width = $id("my_banner").offsetWidth;
  var pointBox = document.getElementsByClassName("point_box")[0];
  var ols = pointBox.children;
  var indexx = 1;
  var time = null;
  var moveX = 0;
  var endX = 0;
  var startX = 0;
  var square = 0;
}
