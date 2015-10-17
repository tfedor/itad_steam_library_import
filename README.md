## ITAD Steam Library Import

This simple Greasemonkey script let's you import your full Steam library with all games, DLCs and packages
to [IsThereAnyDeal.com Collection](http://isthereanydeal.com/collection/).

### Installation

1. This script has been tested in Firefox with [Greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/)
but should also work in Chrome with Tampermonkey. You will have to download the extension if you don't have it yet
 
2. Download itad_steam_library_import.user.js from this repository

3. Drag'n'drop the downloader file into Firefox. You should see Greasemonkey window telling you some info about the script

4. Confirm script installation

5. Now you should be good to go

### How to use

If the installation was successfull, head over to the Steam store and make sure you are logged in.
You should see "Send owned games to ITAD" link at the very top of the page.

> Note: Currently it does work only in store, everywhere but in cart. If you are worried about security let me know which pages I should exclude.

> Currently doesn't work on Steam Community

If you click on the link you should see a message informing you that data are being loaded and once that's done you'll
be redirected to IsThereAnyDeal. You should see a form with all found games and you'll be able to add them
to your Collection.

### Screenshots

![Send to ITAD](https://raw.githubusercontent.com/tfedor/itad_steam_library_import/master/screenshots/button.png)

### What data are being sent to ITAD?

Content of this: http://store.steampowered.com/dynamicstore/userdata/

It is listing:
* games in your Wishlist
* owned games, DLCs and packages
* content of your cart
* tags recommended to you
* ignored apps and packages

Out of this ITAD only uses list of what you own. We reserve the right to use any other content of this file
but I don't see what could we use it for. If you have a problem with this let me know.

At the time of writing this, no identifying data are located in the resource. No usernames, account info or anything else.
If you are worried, open the URL and see for yourself.

### Development

Feel free to fork this script and edit it if you have an idea for improvement.
