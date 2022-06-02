//array containing our pages
const pages = ["story1.html", "story2.html", "story3.html", "story4.html"];

function redirectToNextPage() {
  //get the current page - this grabs just the last part of the URL (e.g. "story1.html" instead of "HTML/story1.html"
  const curr = window.location.pathname.split("/").pop();

  //work out which page we're on - if curr is "story1.html", this is 0, if curr is "story2.html" this is 1, etc. If it doesn't match, this is -1
  let index = pages.indexOf(curr);

  if (index < 0 || index >= pages.length-1) {
    //if we're either non-matching or on the last element
    index = 0; //reset to the first one
  }
   else {
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


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  redirectToNextPage();   //If the page reload this function is called 
}
