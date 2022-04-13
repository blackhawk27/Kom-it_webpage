


// toggle btn dark mode

let darkBtn = document.getElementById("dark-btn");
let dmImg1 = document.getElementById("iconPlaceholderNews");
let dmImg2 = document.getElementById("iconPlaceholderFriends");
let dmImg3 = document.getElementById("iconPlaceholderGroup");
let dmImg4 = document.getElementById("iconPlaceholderWatch");
//let logoImg = document.getElementById("logoImg");

let dmImg5 = document.getElementById("settingIcon");
let dmImg6 = document.getElementById("helpIcon");
let dmImg7 = document.getElementById("displayIcon");
let dmImg8 = document.getElementById("logoutIcon");
let dmImg9 = document.getElementById("feedbackIcon");


if (sessionStorage.getItem("modal") === "none") {
  document.getElementById("modal").style.display = "none";
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
  sessionStorage.setItem("modal", "none");
  console.log("modal closing");
};

let mode = ["Day", "Night"];
let modeText = document.getElementById("modeText");

function changeModeText(){
  
  if(localStorage.getItem("theme") == "dark"){
      modeText.innerHTML = mode[0];
      dmImg5.style.backgroundImage = "url(images/setting.png)";
      dmImg6.style.backgroundImage = "url(images/help.png)";
      dmImg7.style.backgroundImage = "url(images/display.png)";
      dmImg8.style.backgroundImage = "url(images/logout.png)";
      dmImg9.style.backgroundImage = "url(images/feedback.png)";
      
  }

  else{
    modeText.innerHTML = mode[1];
    dmImg5.style.backgroundImage = "url(images/setting2.png)";
    dmImg6.style.backgroundImage = "url(images/help2.png)";
    dmImg7.style.backgroundImage = "url(images/display2.png)";
    dmImg8.style.backgroundImage = "url(images/logout2.png)";
    dmImg9.style.backgroundImage = "url(images/feedback2.png)";
  }
}
// ****************************************************************************************

window.onload = (event) =>{
  dmImg1.style.backgroundImage = "url(images/news.png)";
  dmImg2.style.backgroundImage = "url(images/friends.png)";
  dmImg3.style.backgroundImage = "url(images/group.png)";
  dmImg4.style.backgroundImage = "url(images/watch.png)";
  //logoImg.style.backgroundImage = "url(images/logo.png)";
  changeModeText();
  
  console.log('Page Loaded');

};

let settingsMenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

let iconToggle = document.querySelector(".change-theme-i");

function iconDarkToggle(){
  iconToggle.classList.toggle("rotate-dark-icon");
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
        //logoImg.style.backgroundImage = "url(images/logo.png)";
        
        changeModeText();
        console.log("Dark Mode");
        
    }
    else{
        localStorage.setItem("theme", "dark");
        dmImg1.style.backgroundImage = "url(images/news.png)";
        dmImg2.style.backgroundImage = "url(images/friends.png)";
        dmImg3.style.backgroundImage = "url(images/group.png)";
        dmImg4.style.backgroundImage = "url(images/watch.png)";
        //logoImg.style.backgroundImage = "url(images/logo.png)";
        changeModeText();
        console.log("Light Mode");
    }


}


let likeValue = document.getElementById("likeValue");
let likeCount = 583;
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

// let addPostBtn = document.getElementById("addPostBtn");

// function addPost(){
//   if (addPostBtn.style.display === "none") {
//     addPostBtn.style.display = "block";
//   } 
//   else {
//     addPostBtn.style.display = "none";
//   }
// }
let addPostBtn = document.querySelector(".write-post-container");

function addPost(){
    addPostBtn.classList.toggle("write-post-container-height");
}