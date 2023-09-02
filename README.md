# hide-isekai-general

Hide the isekai general on /a/ recognizable by it's OP post containing the word isekai in spoiler.

## How to use it

Install **Violentmonkey**, **Tampermonkey**, or **Greasemonkey**, then either create a new script and put the text from `script.user.js` inside and save or click [here](https://greasyfork.org/en/scripts/474422-hide-isekai-general-on-a) to install the script directly from GreasyFork.

## How it works

The script listens to the 4chanX API calls and hides the thread(s) that contain the word `isekai` in their post message when all posts have finished rendering (when `PostsInserted` event happens).

You can read the script if you want a more through explanation.
