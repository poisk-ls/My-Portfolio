function exitApp() {
  if (window.history && window.history.length > 1) {
    // Go back to the previous page
    window.history.back();
  } else {
    // No previous page, close the WebView
    if (navigator.app) {
      navigator.app.exitApp();
    } else if (navigator.device) {
      navigator.device.exitApp();
    } else {
      // Unsupported platform, show an error message or handle it gracefully
    }
  }
}
