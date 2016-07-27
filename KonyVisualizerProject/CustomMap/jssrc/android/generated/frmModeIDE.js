function addWidgetsfrmModeIDE() {
    var button1178253845299830 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1178253845299830",
        "isVisible": true,
        "onClick": p2kwiet7980150097_button1178253845299830_onClick_seq0,
        "skin": "btnSkn1",
        "text": "MAP_VIEW_MODE_NORMAL"
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
    var button1178253845299831 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1178253845299831",
        "isVisible": true,
        "onClick": p2kwiet7980150097_button1178253845299831_onClick_seq0,
        "skin": "btnSkn1",
        "text": "MAP_VIEW_MODE_SATELLITE"
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
    var button1178253845299832 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1178253845299832",
        "isVisible": true,
        "onClick": p2kwiet7980150097_button1178253845299832_onClick_seq0,
        "skin": "btnSkn1",
        "text": "MAP_VIEW_MODE_TRAFFIC"
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
    frmModeIDE.add(button1178253845299830, button1178253845299831, button1178253845299832);
};

function frmModeIDEGlobals() {
    frmModeIDE = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmModeIDE,
        "enabledForIdleTimeout": false,
        "id": "frmModeIDE",
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
    frmModeIDE.info = {
        "kuid": "p2kwiet7980150097"
    };
};