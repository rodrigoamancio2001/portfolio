function slide1() {
  if (window.innerWidth <= 768) {
    document.getElementById("skills-page").style.transform = "translateX(46%)";
    document.getElementById("profile-page").style.transform = "translateX(46%)";
  } else {
    document.getElementById("skills-page").style.transform = "translateX(91%)";
    document.getElementById("profile-page").style.transform = "translateX(69%)";
  }
}

function slide2() {
  if (window.innerWidth <= 768) {
    document.getElementById("skills-page").style.transform = "translateX(-50%)";
    document.getElementById("profile-page").style.transform = "translateX(46%)";
  } else {
    document.getElementById("skills-page").style.transform = "translateX(-50%)";
    document.getElementById("profile-page").style.transform = "translateX(69%)";
  }
}

function slide3() {
  document.getElementById("skills-page").style.transform = "translateX(-50%)";
  document.getElementById("profile-page").style.transform = "translateX(-50%)";
}