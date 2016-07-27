//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "CustomMap",
    appName: "CustomMap",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmAddressGlobals();
    frmAnimateToLocationGlobals();
    frmClearMapGlobals();
    frmCustomPinGlobals();
    frmDismissCalloutGlobals();
    frmEventOnBoundsChangedGlobals();
    frmEventOnMapClickGlobals();
    frmEventOnPinClickGlobals();
    frmEventsGlobals();
    frmHomeGlobals();
    frmIsVisibleRWGlobals();
    frmLocationDataGlobals();
    frmMethodsGlobals();
    frmModeIDEGlobals();
    frmModeIDENormalGlobals();
    frmModeIDESateliteGlobals();
    frmModeIDETrafficGlobals();
    frmNavigateToGlobals();
    frmShowCalloutGlobals();
    frmShowZoomControlGlobals();
    frmShowZoomControlFalseGlobals();
    frmShowZoomControlTrueGlobals();
    frmStartupGlobals();
    frmZoom10Globals();
    frmZoom14Globals();
    frmZoom18Globals();
    frmZoom2Globals();
    frmZoom21Globals();
    frmZoom6Globals();
    frmZoomLevelInIDEGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "cwiclassname": "com.konylabs.customwidget.N_maps"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;