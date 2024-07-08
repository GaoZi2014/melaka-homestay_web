if (navigator.userAgent.match(/MSIE (?: [^;]*)?8/)) { // IE8
  window.location.href = "https://jiegeblog.eu.org/browser_not_support.html";
} else if (navigator.userAgent.match(/MSIE (?: [^;]*)?9/)) { // IE9
  window.location.href = "https://jiegeblog.eu.org/browser_not_support.html";
} else if (navigator.userAgent.match(/MSIE (?: [^;]*)?10/)) { // IE10
  window.location.href = "https://jiegeblog.eu.org/browser_not_support.html";
} else if (navigator.userAgent.match(/Trident\/\d.+ rv:11\./)) { // IE11 (using Trident version)
  window.location.href = "https://jiegeblog.eu.org/browser_not_support.html";
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  window.scrollTo(0, 0);
  sidebar.style.display = 'flex';
  setTimeout(
    function showSidebar2() {
      sidebar.style.top = '0px';
    }
  , 100)
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.top = '-1000px';
  setTimeout(
    function showSidebar2() {
      sidebar.style.display = 'none';
    }
  , 500)
}

function showWIFI() {
  let wifi = document.getElementById('password-innerHTML');
  let wifiMobile = document.getElementById('password-innerHTML-mobile');
  wifi.innerHTML = 'Myhomestay3212';
  wifiMobile.innerHTML = 'Myhomestay3212';
}

function hideWIFI() {
  let wifi = document.getElementById('password-innerHTML');
  let wifiMobile = document.getElementById('password-innerHTML-mobile');
  wifi.innerHTML = '';
  wifiMobile.innerHTML = '';
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let navbar = document.querySelector('nav');
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
    navbar.style.boxShadow = '5px 5px 5px #00000018';
  } else {
    navbar.style.top = '-50px';
    navbar.style.boxShadow = '0px 0px 0px #00000018';
  }
  prevScrollpos = currentScrollPos;
};



setTimeout(errtext, 5000)

function errtext() {
  let errtext = document.getElementById('err-text');
  let errtextM = document.getElementById('err-text-mobile');

  errtext.style.fontSize = "80px"
  errtextM.style.fontSize = "80px"
}