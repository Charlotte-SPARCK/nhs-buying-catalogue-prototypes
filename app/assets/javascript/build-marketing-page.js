// ES6 or Vanilla JavaScript
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();

    var checkboxCookie = this.id + "=" + this.checked + "; " + expires;
    document.cookie = checkboxCookie;
}

 var allInputs = document.getElementsByTagName("input");
 var  i=0;

 for (i=0; i<allInputs.length; i++){
   allInputs[i].onclick=setCookie;
 }

//To get a cookie:
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

//Check if cookie exists on page load
function checkCookieOnLoad() {
   if(getCookie("client-application-type-1") == "true") {
      // Show content and hide clicklink
      document.getElementById("client-type-section-1").style.display = "block";
      document.getElementById("disabled-1").style.display = "none";
      document.getElementById("client-type-section-1").checked = true;
   }
   if(getCookie("client-application-type-2") == "true") {
      // Show content and hide clicklink
      document.getElementById("client-type-section-2").style.display = "block";
      document.getElementById("disabled-2").style.display = "none";
   }
   if(getCookie("client-application-type-3") == "true") {
      // Show content and hide clicklink
      document.getElementById("client-type-section-3").style.display = "block";
      document.getElementById("disabled-3").style.display = "none";
   }
}

window.onload = function() {
  checkCookieOnLoad();
};

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyContents()};

// Get the header
var header = document.getElementById("contents");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyContents() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
