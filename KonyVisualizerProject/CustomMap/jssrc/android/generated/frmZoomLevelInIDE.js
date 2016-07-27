function addWidgetsfrmZoomLevelInIDE() {
    var button10436396072 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button10436396072",
        "isVisible": true,
        "onClick": p2kwiet79801500178_button10436396072_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set zoomLevel = 2"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button10436396073 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button10436396073",
        "isVisible": true,
        "onClick": p2kwiet79801500178_button10436396073_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set zoomLevel = 6"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button10436396074 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button10436396074",
        "isVisible": true,
        "onClick": p2kwiet79801500178_button10436396074_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set zoomLevel = 10"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button10436396075 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button10436396075",
        "isVisible": true,
        "onClick": p2kwiet79801500178_button10436396075_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set zoomLevel = 14"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button10436396076 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button10436396076",
        "isVisible": true,
        "onClick": p2kwiet79801500178_button10436396076_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set zoomLevel = 18"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button10436396078 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button10436396078",
        "isVisible": true,
        "onClick": p2kwiet79801500178_button10436396078_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set zoomLevel = 21"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmZoomLevelInIDE.add(button10436396072, button10436396073, button10436396074, button10436396075, button10436396076, button10436396078);
};

function frmZoomLevelInIDEGlobals() {
    frmZoomLevelInIDE = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmZoomLevelInIDE,
        "enabledForIdleTimeout": false,
        "id": "frmZoomLevelInIDE",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
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
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmZoomLevelInIDE.info = {
        "kuid": "p2kwiet79801500178"
    };
};