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

  function addTransition() {
    imgBox.style.transition = "all .3s ease 0s";
    imgBox.style.webkitTransition = "all .3s ease 0s";
  }

  function removeTransition() {
    imgBox.style.transition = "none";
    imgBox.style.webkitTransition = "none";
  }

  function setTransfrom(t) {
    imgBox.style.transform = 'translateX(' + t + 'px)';
    imgBox.style.webkitTransform = 'translateX(' + t + 'px)';

  }

  pointBox.children[0].className = "now";
  for (var i = 0; i < ols.length; i++) {
    ols[i].index = i;//获得当前第几个小li的索引号
    ols[i].onmouseover = function() {
      for (var j=0;j<pls.length;j++) {
        ols[j].className = "";
      }
      this.className = "now";
      setTransfrom(-indexx * width);
      square = indexx;
    }
  }
  timer = setInterval(function() { 
      indexx++;
      addTransition(); 
      setTransfrom(-indexx * width);

      square++;
      if (square > ols.length - 1) {
        square = 0;
      }
      for (var i = 0; i < ols.length; i++) {
        ols[i].className = "";

      }
      ols[square].className = "now";
    },
    3000);
}
