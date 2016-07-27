function addWidgetsfrmEventOnBoundsChanged() {
    var map1 = new maps.CustomMapWidget({
        "id": "map1",
        "isVisible": true,
        "address": null,
        "displayMode": "Normal",
        "height": 70,
        "onBoundsChange": p2kwiet7980150026_map1_onBoundsChange_seq0,
        "onMapClick": p2kwiet7980150026_map1_onMapClick_seq0,
        "onPinClick": p2kwiet7980150026_map1_onPinClick_seq0,
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
    var labelBounds = new kony.ui.Label({
        "id": "labelBounds",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmEventOnBoundsChanged.add(map1, labelBounds);
};

function frmEventOnBoundsChangedGlobals() {
    frmEventOnBoundsChanged = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEventOnBoundsChanged,
        "enabledForIdleTimeout": false,
        "id": "frmEventOnBoundsChanged",
        "needAppMenu": true,
        "preShow": p2kwiet7980150026_frmEventOnBoundsChanged_preshow_seq0,
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
    frmEventOnBoundsChanged.info = {
        "kuid": "p2kwiet7980150026"
    };
};