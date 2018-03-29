jQuery(function($){
	chrome.runtime.onMessage.addListener( //communicate from background.js
		function(request, sender, sendResponse) {
			if( request.message === "clicked_browser_action" ) {
				// var firstHref = jQuery("a[href^='http']").eq(0).attr("href");

				// console.log(firstHref);

				$("#comment-textarea").text("@Rachelle Garaffa - changes made");
				$(".btn-post").click();

				// chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref}); //communicate to background.js
			}
		}
	);
});