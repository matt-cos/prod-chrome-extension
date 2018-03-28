var commentTextarea = document.getElementById('comment-textarea').firstChild;

// Get the current text within the element:
var text = commentTextarea.textContent;

// You can do whatever you want with the text (in this case replace)
// but you must assign the result back to the element
commentTextarea.textContent = text.replace(text, "Changes Made");		