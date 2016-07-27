function addWidgetsfrmShowZoomControl() {
    var button1182930288299637 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1182930288299637",
        "isVisible": true,
        "onClick": p2kwiet79801500123_button1182930288299637_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set showZoomControl = True In IDE"
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
    var button1182930288299645 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1182930288299645",
        "isVisible": true,
        "onClick": p2kwiet79801500123_button1182930288299645_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Set showZoomControl = False In IDE"
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
    frmShowZoomControl.add(button1182930288299637, button1182930288299645);
};

function frmShowZoomControlGlobals() {
    frmShowZoomControl = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmShowZoomControl,
        "enabledForIdleTimeout": false,
        "id": "frmShowZoomControl",
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
    frmShowZoomControl.info = {
        "kuid": "p2kwiet79801500123"
    };
};