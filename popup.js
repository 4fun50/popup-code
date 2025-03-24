(function() {
    // Configuration
    var popupConfig = {
        cookieDuration: 7 // jours
    };

    // HTML de la pop-up (injecté dynamiquement)
    var popupHtml = `
    <div id="custom-popup">
        <div class="popup-content">
            <button class="popup-close">✕</button>
            <div class="popup-message">
                Online sales are reserved for mainland France.
            </div>
            <div class="popup-contact">
                To order outside this area, please contact us by email at 
                <a href="mailto:info@mobi-mat.com" class="popup-email">info@mobi-mat.com</a>
            </div>
            <a href="https://www.mobi-mat.com/en/contact" class="popup-button">Contact us</a>
        </div>
    </div>`;

    // Vérifier si la pop-up doit s'afficher sur cette URL
    function shouldShowPopup() {
        var currentPath = window.location.pathname;
        // Adapter la logique si besoin
        return currentPath.indexOf("/en/shop") !== -1;
    }

    // Gestion cookie
    function getCookie(name) { /* ... comme dans votre code ... */ }
    function setCookie(name, value, days) { /* ... comme dans votre code ... */ }

    // Masquer la pop-up et poser le cookie
    function hidePopup() {
        document.getElementById('custom-popup').style.display = 'none';
        setCookie('customPopupShown', 'true', popupConfig.cookieDuration);
    }

    // Gérer les événements
    function setupPopupEvents() {
        document.querySelector('.popup-close').addEventListener('click', hidePopup);
        document.getElementById('custom-popup').addEventListener('click', function(e) {
            if (e.target.id === 'custom-popup') {
                hidePopup();
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hidePopup();
            }
        });
        document.querySelector('.popup-button').addEventListener('click', function() {
            hidePopup();
            // ... 
        });
    }

    // Initialisation
    function initPopup() {
        // Si cookie déjà présent => on ne réaffiche pas
        if (getCookie('customPopupShown')) {
            return;
        }
        // Si la page n’est pas éligible => on ne fait rien
        if (!shouldShowPopup()) {
            return;
        }
        // Injecter le HTML de la pop-up
        document.body.insertAdjacentHTML('beforeend', popupHtml);
        // Afficher
        document.getElementById('custom-popup').style.display = 'block';
        // Configurer les événements
        setupPopupEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPopup);
    } else {
        initPopup();
    }
})();
