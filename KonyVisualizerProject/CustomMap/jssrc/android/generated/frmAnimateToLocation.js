function addWidgetsfrmAnimateToLocation() {
    var button1928198850300069 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1928198850300069",
        "isVisible": true,
        "onClick": p2kwiet798015007_button1928198850300069_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Animate To Location"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var map1 = new maps.CustomMapWidget({
        "id": "map1",
        "isVisible": true,
        "address": null,
        "displayMode": "Normal",
        "height": 75,
        "onBoundsChange": p2kwiet798015007_map1_onBoundsChange_seq0,
        "onMapClick": p2kwiet798015007_map1_onMapClick_seq0,
        "onPinClick": p2kwiet798015007_map1_onPinClick_seq0,
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
    frmAnimateToLocation.add(button1928198850300069, map1);
};

function frmAnimateToLocationGlobals() {
    frmAnimateToLocation = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAnimateToLocation,
        "enabledForIdleTimeout": false,
        "id": "frmAnimateToLocation",
        "needAppMenu": true,
        "preShow": p2kwiet798015007_frmAnimateToLocation_preshow_seq0,
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
    frmAnimateToLocation.info = {
        "kuid": "p2kwiet798015007"
    };
};