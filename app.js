


let settingsMenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height")
}

// toggle btn dark mode

let darkBtn = document.getElementById("dark-btn");
let dmImg1 = document.getElementById("iconPlaceholderNews");
let dmImg2 = document.getElementById("iconPlaceholderFriends");
let dmImg3 = document.getElementById("iconPlaceholderGroup");
let dmImg4 = document.getElementById("iconPlaceholderWatch");


darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    // update mode
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
        dmImg1.style.backgroundImage = "url(/images/news-darkmode.png)";
        dmImg2.style.backgroundImage = "url(/images/friends-darkmode.png)";
        dmImg3.style.backgroundImage = "url(/images/group-darkmode.png)";
        dmImg4.style.backgroundImage = "url(/images/watch-darkmode.png)";
        
    }
    else{
        localStorage.setItem("theme", "light");
        dmImg1.style.backgroundImage = "url(/images/news.png)";
        dmImg2.style.backgroundImage = "url(/images/friends.png)";
        dmImg3.style.backgroundImage = "url(/images/group.png)";
        dmImg4.style.backgroundImage = "url(/images/watch.png)";
    }

    /*
    if (dmImg1.style.backgroundImage == "url(/images/news.png)") {
      dmImg1.style.backgroundImage = "url(/images/news-darkmode.png)";
    } 
    else {
      dmImg1.style.backgroundImage = "url(/images/news.png)";
    }
    */


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

function showComments(){
    let comments = document.getElementById("postedComment");
    
    if (comments.style.display === "none") {
      comments.style.display = "block";
    } else {
      comments.style.display = "none";
    }
}

