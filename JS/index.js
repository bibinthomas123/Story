// let Storynumber = ["story1.html", "story2.html", "story3.html"];

let currentLocation = window.location;
var i;

window.onbeforeunload = function () {
  if (currentLocation.pathname == "/HTML/story1.html") {
    window.setTimeout(function () {
      window.location.replace("http://127.0.0.1:5500/HTML/story2.html");
      console.log("Working");
  });
    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser
  } else if (currentLocation.pathname == "/HTML/story2.html") {
    window.setTimeout(function () {
      window.location.replace("http://127.0.0.1:5500/HTML/story3.html");
      console.log("Working");
    });
    window.onbeforeunload = null;
  } else if (currentLocation.pathname == "/HTML/story3.html") {
    window.setTimeout(function () {
      window.location.replace("http://127.0.0.1:5500/HTML/story1.html");
      console.log("Working");
    });
    window.onbeforeunload = null;
  } else {
    console.log("same page cant be reloaded");
  }
};
