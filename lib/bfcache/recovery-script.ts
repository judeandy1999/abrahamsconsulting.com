/**
 * Inline script in root layout — must be part of the cached document for bfcache.
 * Reloads when the user returns via Back after leaving the site or when bfcache restores.
 */
export const BFCACHE_RECOVERY_SCRIPT = `
(function () {
  var RELOAD_KEY = "ac-reload-on-show";
  if (window.__acBfcacheRecoveryInstalled) return;
  window.__acBfcacheRecoveryInstalled = true;

  function markReturnReload() {
    try {
      sessionStorage.setItem(RELOAD_KEY, "1");
    } catch (error) {}
  }

  function consumeReturnReload() {
    try {
      if (sessionStorage.getItem(RELOAD_KEY) === "1") {
        sessionStorage.removeItem(RELOAD_KEY);
        return true;
      }
    } catch (error) {}
    return false;
  }

  function reloadNow() {
    window.location.reload();
  }

  document.addEventListener(
    "click",
    function (event) {
      var target = event.target;
      if (!target || !target.closest) return;
      var anchor = target.closest("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      try {
        var url = new URL(anchor.href, window.location.href);
        if (url.origin !== window.location.origin) {
          markReturnReload();
        }
      } catch (error) {}
    },
    true
  );

  window.addEventListener("pagehide", function (event) {
    if (event.persisted) {
      markReturnReload();
    }
  });

  window.addEventListener("pageshow", function (event) {
    var marked = consumeReturnReload();
    if (event.persisted || marked) {
      reloadNow();
    }
  });

  window.addEventListener("popstate", function () {
    if (consumeReturnReload()) {
      reloadNow();
    }
  });
})();
`;
