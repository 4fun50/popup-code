(function() {
    // Configuration
    var popupConfig = {
        cookieDuration: 7
    };

    function shouldShowPopup() {
        var currentPath = window.location.pathname;
        return currentPath.indexOf("/en/shop") !== -1;
    }

    // ... etc. (tout votre code pop-up)
})();
