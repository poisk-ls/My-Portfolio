document.addEventListener("deviceready", onDeviceReady, false);

function closeApp() {
	console.log('closeApp');
	navigator.app.exitApp();
}