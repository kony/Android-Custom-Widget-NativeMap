function addWidgetsfrmEvents() {
    var button1182930288299569 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1182930288299569",
        "isVisible": true,
        "onClick": p2kwiet7980150040_button1182930288299569_onClick_seq0,
        "skin": "btnSkn1",
        "text": "OnPinClick"
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
    var button1178224054301909 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1178224054301909",
        "isVisible": true,
        "onClick": p2kwiet7980150040_button1178224054301909_onClick_seq0,
        "skin": "btnSkn1",
        "text": "onMapClick"
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
    var button1178224054301915 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1178224054301915",
        "isVisible": true,
        "onClick": p2kwiet7980150040_button1178224054301915_onClick_seq0,
        "skin": "btnSkn1",
        "text": "onBoundsChanged"
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
    frmEvents.add(button1182930288299569, button1178224054301909, button1178224054301915);
};

function frmEventsGlobals() {
    frmEvents = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEvents,
        "enabledForIdleTimeout": false,
        "id": "frmEvents",
        "needAppMenu": true,
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
    frmEvents.info = {
        "kuid": "p2kwiet7980150040"
    };
};