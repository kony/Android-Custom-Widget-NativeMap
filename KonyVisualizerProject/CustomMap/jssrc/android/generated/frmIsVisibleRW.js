function addWidgetsfrmIsVisibleRW() {
    var hbox1930284220307182 = new kony.ui.Box({
        "id": "hbox1930284220307182",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button1930284220307183 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930284220307183",
        "isVisible": true,
        "onClick": p2kwiet7980150080_button1930284220307183_onClick_seq0,
        "skin": "btnSkn1",
        "text": "isVisible = True"
    }, {
        "containerWeight": 51,
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
    var button1930284220307193 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930284220307193",
        "isVisible": true,
        "onClick": p2kwiet7980150080_button1930284220307193_onClick_seq0,
        "skin": "btnSkn1",
        "text": "isVisible = False"
    }, {
        "containerWeight": 49,
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
    hbox1930284220307182.add(button1930284220307183, button1930284220307193);
    var map1 = new maps.CustomMapWidget({
        "id": "map1",
        "isVisible": true,
        "address": null,
        "displayMode": "Normal",
        "height": 75,
        "onBoundsChange": p2kwiet7980150080_map1_onBoundsChange_seq0,
        "onMapClick": p2kwiet7980150080_map1_onMapClick_seq0,
        "onPinClick": p2kwiet7980150080_map1_onPinClick_seq0,
        "locationData": null,
        "showZoomControl": false,
        "width": 100,
        "zoomLevel": 1
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "widgetName": "CustomMapWidget"
    });
    frmIsVisibleRW.add(hbox1930284220307182, map1);
};

function frmIsVisibleRWGlobals() {
    frmIsVisibleRW = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmIsVisibleRW,
        "enabledForIdleTimeout": false,
        "id": "frmIsVisibleRW",
        "needAppMenu": true,
        "skin": "frmSkn1"
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
    frmIsVisibleRW.info = {
        "kuid": "p2kwiet7980150080"
    };
};