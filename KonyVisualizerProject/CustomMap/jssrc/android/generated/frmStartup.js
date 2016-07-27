function addWidgetsfrmStartup() {
    var hbox192741954010 = new kony.ui.Box({
        "id": "hbox192741954010",
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
    var button192741954031980 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192741954031980",
        "isVisible": true,
        "onClick": p2kwiet79801500145_button192741954031980_onClick_seq0,
        "text": "Pin By LatLng"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [50, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button192741954032212 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button192741954032212",
        "isVisible": true,
        "onClick": p2kwiet79801500145_button192741954032212_onClick_seq0,
        "text": "Pin By Address"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [50, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button137131096232200 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button137131096232200",
        "isVisible": true,
        "onClick": p2kwiet79801500145_button137131096232200_onClick_seq0,
        "text": "Clear Map"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [50, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox192741954010.add(button192741954031980, button192741954032212, button137131096232200);
    var hbox137131096230232 = new kony.ui.Box({
        "id": "hbox137131096230232",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 10, 0, 0],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button137131096230234 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button137131096230234",
        "isVisible": true,
        "onClick": p2kwiet79801500145_button137131096230234_onClick_seq0,
        "text": "Normal Mode"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [20, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button137131096230236 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button137131096230236",
        "isVisible": true,
        "onClick": p2kwiet79801500145_button137131096230236_onClick_seq0,
        "text": "Satellite Mode"
    }, {
        "containerWeight": 25,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [50, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button137131096230238 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button137131096230238",
        "isVisible": true,
        "onClick": p2kwiet79801500145_button137131096230238_onClick_seq0,
        "text": "Multiple Pins"
    }, {
        "containerWeight": 28,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [50, 0, 0, 0],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox137131096230232.add(button137131096230234, button137131096230236, button137131096230238);
    var labelAction = new kony.ui.Label({
        "id": "labelAction",
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
    var labelLocation = new kony.ui.Label({
        "id": "labelLocation",
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
    var labelLocationBounds = new kony.ui.Label({
        "id": "labelLocationBounds",
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
    frmStartup.add(hbox192741954010, hbox137131096230232, labelAction, labelLocation, labelLocationBounds);
};

function frmStartupGlobals() {
    frmStartup = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStartup,
        "enabledForIdleTimeout": false,
        "id": "frmStartup",
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
    frmStartup.info = {
        "kuid": "p2kwiet79801500145"
    };
};