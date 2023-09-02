# hide-isekai-general

Hide the isekai general on /a/ recognizable by it's OP post containing the word isekai in spoiler.

## Requirements

**Violentmonkey**, **Tampermonkey**, or **Greasemonkey** along with [4chan-X](https://github.com/ccd0/4chan-x/) is required.

## [Click here to Install](https://github.com/NecRaul/hide-isekai-general/raw/main/script.user.js)

### How it works

The script listens to the 4chanX API calls and hides the thread(s) that contain the word `isekai` in their post message when all posts have finished rendering (when `PostsInserted` event happens).

You can read the script if you want a more through explanation.
