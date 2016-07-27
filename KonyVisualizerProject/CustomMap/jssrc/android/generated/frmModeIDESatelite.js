function addWidgetsfrmModeIDESatelite() {
    var map1 = new maps.CustomMapWidget({
        "id": "map1",
        "isVisible": true,
        "address": null,
        "displayMode": "Satellite",
        "height": 75,
        "onBoundsChange": p2kwiet79801500105_map1_onBoundsChange_seq0,
        "onMapClick": p2kwiet79801500105_map1_onMapClick_seq0,
        "onPinClick": p2kwiet79801500105_map1_onPinClick_seq0,
        "locationData": null,
        "showZoomControl": true,
        "width": 100,
        "zoomLevel": 15
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "CustomMapWidget"
    });
    frmModeIDESatelite.add(map1);
};

function frmModeIDESateliteGlobals() {
    frmModeIDESatelite = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmModeIDESatelite,
        "enabledForIdleTimeout": false,
        "id": "frmModeIDESatelite",
        "needAppMenu": true,
        "postShow": p2kwiet79801500105_frmModeIDESatelite_postshow_seq0,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmModeIDESatelite.info = {
        "kuid": "p2kwiet79801500105"
    };
};