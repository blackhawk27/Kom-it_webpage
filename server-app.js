

// sub_comment
function submit() {

  let data = {
    Comment: document.getElementById('submit_form').textArea.value
  };
  alert("Submit is called " + data);

  fetch('./comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Comment inserted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
// delete comment
function deleteComment(commentID) {

    let data = {
      Id: commentID
    };
  

  fetch('./comment', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Comment deleted:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// update comment
function updateComment(commentID, commentData) {

  let data = {
    Id: commentID,
    comment_upd: commentData
  }

  fetch('./comment', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Comment updated:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}



let div = document.body.appendChild(document.createElement("div"));

function getCommentAlert() {
  fetch("/getComments")
  .then(response => response.json())
  .then(data => {
    alert(JSON.stringify(data));
  });
}

// create comments and display them
function getComment() {
  fetch("/getComments")
  .then(response => response.json())
  .then(data => {
    
    div.remove();
    divPostedComments = document.body.getElementsByClassName("posted-comments");
    

    for(let comment of data.getComments) {
      //alert(JSON.stringify(comment));
      let p = div.appendChild(document.createElement("p"));
      p.innerHTML = comment._id; // shows id in p tag
      let text = div.appendChild(document.createElement("textarea"));
      text.innerHTML = comment.Comment; // shows what to write in comment
      let btn1 = div.appendChild(document.createElement("button"));
      let btn2 = div.appendChild(document.createElement("button"));
      btn1.innerHTML = "Rediger";
      btn1.onclick = function () {
        updateComment(comment._id, text.value);
        getComment();
      };
      btn2.innerHTML = "Slet kommentar";
      btn2.onclick = function () {
        deleteComment(comment._id);
        getComment();
      };
    }

  });
}

