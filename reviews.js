function addComment() {
  var name = document.getElementById("name").value;
  var commentText = document.getElementById("comment").value;

  if (name && commentText) {
    var commentContainer = document.getElementById("comments-list");

    // Create a new comment element
    var commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = "<strong>" + name + ":</strong> " + commentText;

    // Append the new comment to the comments container
    commentContainer.appendChild(commentElement);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  } else {
    alert("Please enter both name and comment.");
  }
}
