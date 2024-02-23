// ==UserScript==
// @name         Hide Isekai general on /a/
// @version      1.1
// @namespace    Hide Isekai general on /a/
// @description  Hide the isekai general on /a/ recognizable by it's OP post containing the word isekai in spoiler.
// @author       NecRaul
// @license      MIT; https://github.com/NecRaul/hide-isekai-general/blob/main/LICENSE
// @match        *://boards.4chan.org/a/
// @match        *://boards.4channel.org/a/
// @updateURL    https://github.com/NecRaul/hide-isekai-general/blob/main/script.user.js
// @downloadURL  https://github.com/NecRaul/hide-isekai-general/blob/main/script.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=4channel.org
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  document.addEventListener(
    "PostsInserted", // uses the 4chanX API
    function () {
      // Find all elements with the class "catalog-thread"
      const catalogThreads = document.querySelectorAll(".catalog-thread");
      // Iterate through each catalog thread
      catalogThreads.forEach((thread) => {
        // Find the blockquote element within the current catalog thread
        const blockquote = thread.querySelector(
          ".catalog-container .catalog-post blockquote.postMessage"
        );
        // Check if the blockquote element exists and its innerHTML contains "<s>isekai</s>"
        // Replace this with something else if you want block that
        if (blockquote && blockquote.innerHTML.includes("<s>isekai</s>")) {
          // Apply CSS style to hide the catalog thread
          thread.style.display = "none";
        }
      });
    },
    false
  );
})();

