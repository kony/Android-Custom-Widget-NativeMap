function addWidgetsfrmMethods() {
    var button118198246454028 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button118198246454028",
        "isVisible": true,
        "onClick": p2kwiet7980150091_button118198246454028_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Test clearMap()"
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
    var button1182930288299822 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1182930288299822",
        "isVisible": true,
        "onClick": p2kwiet7980150091_button1182930288299822_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Test dismissCallout()"
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
    var button1182930288299824 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1182930288299824",
        "isVisible": true,
        "onClick": p2kwiet7980150091_button1182930288299824_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Test navigateToIndex()"
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
    var button118198246454519 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button118198246454519",
        "isVisible": true,
        "onClick": p2kwiet7980150091_button118198246454519_onClick_seq0,
        "skin": "btnSkn1",
        "text": "Test animateToLocation()"
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
    frmMethods.add(button118198246454028, button1182930288299822, button1182930288299824, button118198246454519);
};

function frmMethodsGlobals() {
    frmMethods = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMethods,
        "enabledForIdleTimeout": false,
        "id": "frmMethods",
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
    frmMethods.info = {
        "kuid": "p2kwiet7980150091"
    };
};