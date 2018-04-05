function rachelle() {
	chrome.tabs.executeScript({
		code: 'document.getElementById("comment-textarea").value = "@Rachelle Garaffa - changes made";jQuery(".btn-post").click();'
	}); 
}

function zach() {
	chrome.tabs.executeScript({
		code: 'document.getElementById("comment-textarea").value = "@Zach Gordon - changes made";jQuery(".btn-post").click();'
	}); 
}

function working() {
	chrome.tabs.executeScript({
		code: 'document.getElementById("comment-textarea").value = "working here";jQuery(".btn-post").click();'
	}); 
}

document.getElementById('rachelle').addEventListener('click', rachelle);
document.getElementById('zach').addEventListener('click', zach);
document.getElementById('working').addEventListener('click', working);