function addWidgetsfrmDismissCallout() {
    var button1930284220307408 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1930284220307408",
        "isVisible": true,
        "onClick": p2kwiet7980150021_button1930284220307408_onClick_seq0,
        "skin": "btnSkn1",
        "text": "dismissCallout()"
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
        "onBoundsChange": p2kwiet7980150021_map1_onBoundsChange_seq0,
        "onMapClick": p2kwiet7980150021_map1_onMapClick_seq0,
        "onPinClick": p2kwiet7980150021_map1_onPinClick_seq0,
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
    frmDismissCallout.add(button1930284220307408, map1);
};

function frmDismissCalloutGlobals() {
    frmDismissCallout = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDismissCallout,
        "enabledForIdleTimeout": false,
        "id": "frmDismissCallout",
        "needAppMenu": true,
        "preShow": p2kwiet7980150021_frmDismissCallout_preshow_seq0,
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
    frmDismissCallout.info = {
        "kuid": "p2kwiet7980150021"
    };
};