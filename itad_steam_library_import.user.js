// ==UserScript==
// @name        ITAD Steam Library Import
// @namespace   itad
// @include     http://store.steampowered.com/*
// @exclude     http://store.steampowered.com/cart/
// @version     0.9
// @run-at      document-end
// ==/UserScript==

var ITAD_IMPORT_FORM = "https://isthereanydeal.com/outside/user/collection/3rdparty/steam";

var S = unsafeWindow;
var $S = S.$J; // NOTE: I'm counting on Steam's jQuery

/** check if user is logged in */
if (S.g_AccountID != 0) {
    $S("<a href='javascript:void(0);' id='itad_importButton' class='global_action_link' style='margin-right:8px;'>Send owned games to ITAD</a>")
        .insertBefore("#global_action_menu")
        .click(function(){
            var dialog = ShowBlockingWaitDialog("Loading data", "Loading your owned games and packages and sending them to IsThereAnyDeal.com");
            var url = "http://store.steampowered.com/dynamicstore/userdata/" + S.g_AccountID;
            $S.get(url).done(function(data) {
                var form = "<form name='itad_import' method='POST' action='" + ITAD_IMPORT_FORM + "'>"
                              +"<input type='hidden' name='json' value='" + JSON.stringify(data) + "'>"
                              +"<input type='hidden' name='returnTo' value='" + window.location.href + "'>"
                          +"</form>";
                $S(form).appendTo("#global_action_menu").submit();
            });
        });
}
