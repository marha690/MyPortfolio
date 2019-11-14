document.getElementById("project1").onmouseover = function() {mouseOver1()};
document.getElementById("project1").onmouseout = function() {mouseOut1()};
document.getElementById("project2").onmouseover = function() {mouseOver2()};
document.getElementById("project2").onmouseout = function() {mouseOut2()};
document.getElementById("project3").onmouseover = function() {mouseOver3()};
document.getElementById("project3").onmouseout = function() {mouseOut3()};

function mouseOver1() {
  document.getElementById("info-text1").style.display = "block";
}

function mouseOut1() {
  document.getElementById("info-text1").style.display = "none";
}

function mouseOver2() {
  document.getElementById("info-text2").style.display = "block";
}

function mouseOut2() {
  document.getElementById("info-text2").style.display = "none";
}

function mouseOver3() {
  document.getElementById("info-text3").style.display = "block";
}

function mouseOut3() {
  document.getElementById("info-text3").style.display = "none";
}
