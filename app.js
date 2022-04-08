


// toggle btn dark mode

let darkBtn = document.getElementById("dark-btn");
let dmImg1 = document.getElementById("iconPlaceholderNews");
let dmImg2 = document.getElementById("iconPlaceholderFriends");
let dmImg3 = document.getElementById("iconPlaceholderGroup");
let dmImg4 = document.getElementById("iconPlaceholderWatch");

window.onload = (event) =>{

  dmImg1.style.backgroundImage = "url(images/news.png)";
  dmImg2.style.backgroundImage = "url(images/friends.png)";
  dmImg3.style.backgroundImage = "url(images/group.png)";
  dmImg4.style.backgroundImage = "url(images/watch.png)";

  console.log('Page Loaded');

};

let settingsMenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height")
}


darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // update mode
    if(localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
        dmImg1.style.backgroundImage = "url(images/news.png)";
        dmImg2.style.backgroundImage = "url(images/friends.png)";
        dmImg3.style.backgroundImage = "url(images/group.png)";
        dmImg4.style.backgroundImage = "url(images/watch.png)";
        
    }
    else{
        localStorage.setItem("theme", "dark");
        dmImg1.style.backgroundImage = "url(images/news.png)";
        dmImg2.style.backgroundImage = "url(images/friends.png)";
        dmImg3.style.backgroundImage = "url(images/group.png)";
        dmImg4.style.backgroundImage = "url(images/watch.png)";
    }


}

let likeValue = document.getElementById("likeValue");
let likeCount = 4;
let setValue = likeValue.innerHTML = likeCount;


let images = ["images/like.png", "images/like-blue.png"];
let index = 2;


function like(parentElement){
  console.log(parentElement);
  let likeBtn = document.getElementById(parentElement);
  console.log(likeBtn);
  if(index == images.length){
    index = 0;
    likeBtn.style.backgroundImage = "url("+images[1]+")";
    likeCount += 1;
    setValue = likeValue.innerHTML = likeCount;
  }
  else{
    index = images.length;
    likeBtn.style.backgroundImage = "url("+images[0]+")";
    likeCount -= 1;
    setValue = likeValue.innerHTML = likeCount;
  }
  
}



// remains in darkmode if refreshed

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
// default value
else{
    localStorage.setItem("theme", "light");
}

// Send comment
/*
document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
    }
});
*/

let c = document.getElementById("postedComment").children;
// returns 2 elements because of 2 comments with class posted-comments

let comments = document.getElementById("postedComment");
let input = document.getElementById("writeComment");

function showComments(){
    
    if (comments.style.display === "none") {
      comments.style.display = "block";
    } 
    else {
      comments.style.display = "none";
    }
}

function showCommentInput(){
  
  
  if (input.style.display === "none") {
    input.style.display = "flex";
  } 
  else {
    input.style.display = "none";
    comments.style.display = "none";

  }
}
