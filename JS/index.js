// let audio = new Audio("/JS/videoplayback_SwUrQwLV.mp3");
//array containing our pages
const pages = ["story1.html", "story2.html", "story3.html", "story4.html"];


function redirectToNextPage() {
  //get the current page - this grabs just the last part of the URL (e.g. "story1.html" instead of "HTML/story1.html"
  const curr = window.location.pathname.split("/").pop();

  //work out which page we're on - if curr is "story1.html", this is 0, if curr is "story2.html" this is 1, etc. If it doesn't match, this is -1
  let index = pages.indexOf(curr);

  if (index < 0 || index >= pages.length - 1) {
    //if we're either non-matching or on the last element
    index = 0; //reset to the first one
  } else {
    index++; //go to the next one
  }
  console.log(pages[index]);

  // window.removeEventListener('beforeunload', redirectToNextPage); //remove event listener
  window.location.replace(pages[index]); //do the redirect to the next page
}

// window.addEventListener('beforeunload', redirectToNextPage);

// if (window.performance) {  // To check the compatibility of the browser with "performance "
//   console.info("window.performance works fine on this browser");
// }

function TexttoSpeech() {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[7];
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.text = document.getElementById("text").innerHTML;
  msg.lang = "es";
  window.speechSynthesis.speak(msg);
}

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "/JS/videoplayback_SwUrQwLV.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
    
})

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  redirectToNextPage(); //If the page reload this function is called
  TexttoSpeech();

}
