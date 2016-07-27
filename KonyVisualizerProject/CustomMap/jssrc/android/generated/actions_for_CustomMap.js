//actions.js file 
function AS_TPW_26f7c025503d4e768a0d62d23ad9b89f(eventobject) {
    alert("aaaa " + JSON.stringify(arguments[0]));
    alert("bbbb  " + JSON.stringify(arguments[1]));
}

function p2kwiet79801500101_frmModeIDENormal_preshow_seq0(eventobject, neworientation) {
    return frmModeIDENormal_DataLoad.call(this);
}

function p2kwiet79801500101_map1_onBoundsChange_seq0() {}

function p2kwiet79801500101_map1_onMapClick_seq0() {}

function p2kwiet79801500101_map1_onPinClick_seq0() {}

function p2kwiet79801500105_frmModeIDESatelite_postshow_seq0(eventobject, neworientation) {
    return frmModeIDESatelite_DataLoad.call(this);
}

function p2kwiet79801500105_map1_onBoundsChange_seq0() {}

function p2kwiet79801500105_map1_onMapClick_seq0() {}

function p2kwiet79801500105_map1_onPinClick_seq0() {}

function p2kwiet79801500109_frmModeIDETraffic_postshow_seq0(eventobject, neworientation) {
    return frmModeIDETraffic_DataLoad.call(this);
}

function p2kwiet79801500109_map1_onBoundsChange_seq0() {}

function p2kwiet79801500109_map1_onMapClick_seq0() {}

function p2kwiet79801500109_map1_onPinClick_seq0() {}

function p2kwiet79801500114_button1928198850300069_onClick_seq0(eventobject) {
    frmNavigateTo.map1.navigateToIndex(4, true);
}

function p2kwiet79801500114_frmNavigateTo_preshow_seq0(eventobject, neworientation) {
    return frmNavigateTo_LoadData.call(this);
}

function p2kwiet79801500114_map1_onBoundsChange_seq0() {}

function p2kwiet79801500114_map1_onMapClick_seq0() {}

function p2kwiet79801500114_map1_onPinClick_seq0() {}

function p2kwiet79801500118_frmShowCallout_preshow_seq0(eventobject, neworientation) {
    return frmShowCallout_LoadData.call(this);
}

function p2kwiet79801500118_map1_onBoundsChange_seq0() {}

function p2kwiet79801500118_map1_onMapClick_seq0() {}

function p2kwiet79801500118_map1_onPinClick_seq0() {}

function p2kwiet79801500123_button1182930288299637_onClick_seq0(eventobject) {
    frmShowZoomControlTrue.show();
}

function p2kwiet79801500123_button1182930288299645_onClick_seq0(eventobject) {
    frmShowZoomControlFalse.show();
}

function p2kwiet79801500127_frmShowZoomControlFalse_postshow_seq0(eventobject, neworientation) {
    frmShowZoomControlFalse.map1.locationData = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        image: "pin_a.png",
        meta: {
            color: "green",
            label: "C"
        }
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",
        image: "pin_b.png",
        meta: {
            color: "red",
            label: "A"
        }
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
        image: "pin_a.png",
        meta: {
            color: "yellow",
            label: "B"
        }
    }]
}

function p2kwiet79801500127_map1_onBoundsChange_seq0() {}

function p2kwiet79801500127_map1_onMapClick_seq0() {}

function p2kwiet79801500127_map1_onPinClick_seq0() {}

function p2kwiet7980150012_button1930284220307408_onClick_seq0(eventobject) {
    frmClearMap.map1.clear();
}

function p2kwiet7980150012_frmClearMap_preshow_seq0(eventobject, neworientation) {
    return frmClearMap_LoadData.call(this);
}

function p2kwiet7980150012_map1_onBoundsChange_seq0() {}

function p2kwiet7980150012_map1_onMapClick_seq0() {}

function p2kwiet7980150012_map1_onPinClick_seq0() {}

function p2kwiet79801500131_frmShowZoomControlTrue_postshow_seq0(eventobject, neworientation) {
    frmShowZoomControlTrue.map1.locationData = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        image: "pin_a.png",
        meta: {
            color: "green",
            label: "C"
        }
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",
        image: "pin_b.png",
        meta: {
            color: "red",
            label: "A"
        }
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
        image: "pin_a.png",
        meta: {
            color: "yellow",
            label: "B"
        }
    }]
}

function p2kwiet79801500131_map1_onBoundsChange_seq0() {}

function p2kwiet79801500131_map1_onMapClick_seq0() {}

function p2kwiet79801500131_map1_onPinClick_seq0() {}

function p2kwiet79801500145_button137131096230234_onClick_seq0(eventobject) {
    frmStartup.M4BMapViewcustom192741954029725.displayMode = "Normal";
}

function p2kwiet79801500145_button137131096230236_onClick_seq0(eventobject) {
    frmStartup.M4BMapViewcustom192741954029725.displayMode = "Satellite";
}

function p2kwiet79801500145_button137131096230238_onClick_seq0(eventobject) {
    return addCalloutData.call(this);
}

function p2kwiet79801500145_button137131096232200_onClick_seq0(eventobject) {
    return clearMap.call(this);
}

function p2kwiet79801500145_button192741954031980_onClick_seq0(eventobject) {
    return setPin.call(this);
}

function p2kwiet79801500145_button192741954032212_onClick_seq0(eventobject) {
    return setAddress.call(this);
}

function p2kwiet79801500149_frmZoom10_preshow_seq0(eventobject, neworientation) {
    return frmZoom10_LoadData.call(this);
}

function p2kwiet79801500149_map1_onBoundsChange_seq0() {}

function p2kwiet79801500149_map1_onMapClick_seq0() {}

function p2kwiet79801500149_map1_onPinClick_seq0() {}

function p2kwiet79801500153_frmZoom14_preshow_seq0(eventobject, neworientation) {
    return frmZoom14_LoadData.call(this);
}

function p2kwiet79801500153_map1_onBoundsChange_seq0() {}

function p2kwiet79801500153_map1_onMapClick_seq0() {}

function p2kwiet79801500153_map1_onPinClick_seq0() {}

function p2kwiet79801500157_frmZoom18_preshow_seq0(eventobject, neworientation) {
    return frmZoom18_LoadData.call(this);
}

function p2kwiet79801500157_map1_onBoundsChange_seq0() {}

function p2kwiet79801500157_map1_onMapClick_seq0() {}

function p2kwiet79801500157_map1_onPinClick_seq0() {}

function p2kwiet79801500161_frmZoom2_preshow_seq0(eventobject, neworientation) {
    return frmZoom2_LoadData.call(this);
}

function p2kwiet79801500161_map1_onBoundsChange_seq0() {}

function p2kwiet79801500161_map1_onMapClick_seq0() {}

function p2kwiet79801500161_map1_onPinClick_seq0() {}

function p2kwiet79801500165_frmZoom21_preshow_seq0(eventobject, neworientation) {
    return frmZoom21_LoadData.call(this);
}

function p2kwiet79801500165_map1_onBoundsChange_seq0() {}

function p2kwiet79801500165_map1_onMapClick_seq0() {}

function p2kwiet79801500165_map1_onPinClick_seq0() {}

function p2kwiet79801500169_frmZoom6_preshow_seq0(eventobject, neworientation) {
    return frmZoom6_LoadData.call(this);
}

function p2kwiet79801500169_map1_onBoundsChange_seq0() {}

function p2kwiet79801500169_map1_onMapClick_seq0() {}

function p2kwiet79801500169_map1_onPinClick_seq0() {}

function p2kwiet7980150016_frmCustomPin_preshow_seq0(eventobject, neworientation) {
    return frmCustomPin_LoadData.call(this);
}

function p2kwiet7980150016_map1_onBoundsChange_seq0() {}

function p2kwiet7980150016_map1_onMapClick_seq0() {}

function p2kwiet7980150016_map1_onPinClick_seq0() {}

function p2kwiet79801500178_button10436396072_onClick_seq0(eventobject) {
    frmZoom2.show();
}

function p2kwiet79801500178_button10436396073_onClick_seq0(eventobject) {
    frmZoom6.show();
}

function p2kwiet79801500178_button10436396074_onClick_seq0(eventobject) {
    frmZoom10.show();
}

function p2kwiet79801500178_button10436396075_onClick_seq0(eventobject) {
    frmZoom14.show();
}

function p2kwiet79801500178_button10436396076_onClick_seq0(eventobject) {
    frmZoom18.show();
}

function p2kwiet79801500178_button10436396078_onClick_seq0(eventobject) {
    frmZoom21.show();
}

function p2kwiet7980150021_button1930284220307408_onClick_seq0(eventobject) {
    return closePopup.call(this);
}

function p2kwiet7980150021_frmDismissCallout_preshow_seq0(eventobject, neworientation) {
    frmDismissCallout.map1.locationData = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        image: "pin_a.png",
        showCallout: true,
        calloutData: {
            lbl1: "KonyLabs(new)",
            lbl2: "Phoenix infocity, Gachibowli",
            img1: "close.png",
            img2: "kony_new.png"
        }
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",
        image: "pin_b.png",
        showCallout: true,
        calloutData: {
            lbl1: "KonyLabs(old)",
            lbl2: "Kony Solutions, Madhapur",
            img1: "close.png",
            img2: "kony_old.png"
        }
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
        image: "pin_a.png",
        showCallout: true,
        calloutData: {
            lbl1: "My Residence",
            lbl2: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
            img1: "close.png",
            img2: "home.png"
        }
    }]
}

function p2kwiet7980150021_map1_onBoundsChange_seq0() {}

function p2kwiet7980150021_map1_onMapClick_seq0() {}

function p2kwiet7980150021_map1_onPinClick_seq0() {
    return onPinClick.call(this, arguments[0]);
}

function p2kwiet7980150026_frmEventOnBoundsChanged_preshow_seq0(eventobject, neworientation) {
    return frmEventOnBoundsChanged_LoadData.call(this);
}

function p2kwiet7980150026_map1_onBoundsChange_seq0() {
    frmEventOnBoundsChanged.labelBounds.text = "OnBoundsChanged Event Triggered \ncenter bound \nlatitude:" + arguments[0].center.lat + " \nlongitude:" + arguments[0].center.lon + " \nnortheast bound \nlatitude:" + arguments[0].northeast.lat + "\nlongitude:" + arguments[0].northeast.lon + " \nsouthwest bound \nlatitude:" + arguments[0].southwest.lat + " \nlongitude:" + arguments[0].southwest.lon;
}

function p2kwiet7980150026_map1_onMapClick_seq0() {}

function p2kwiet7980150026_map1_onPinClick_seq0() {}

function p2kwiet798015002_frmAddress_preshow_seq0(eventobject, neworientation) {
    return frmAddress_LoadData.call(this);
}

function p2kwiet798015002_map1_onBoundsChange_seq0() {}

function p2kwiet798015002_map1_onMapClick_seq0() {}

function p2kwiet798015002_map1_onPinClick_seq0() {}

function p2kwiet7980150030_frmEventOnMapClick_preshow_seq0(eventobject, neworientation) {
    return frmEventsOnMapClick_LoadData.call(this);
}

function p2kwiet7980150030_map1_onBoundsChange_seq0() {}

function p2kwiet7980150030_map1_onMapClick_seq0() {
    alert("On Map Event Triggered \nlatitude: " + arguments[0].lat + " \nlongitude: " + arguments[0].lon);
}

function p2kwiet7980150030_map1_onPinClick_seq0() {}

function p2kwiet7980150034_frmEventOnPinClick_preshow_seq0(eventobject, neworientation) {
    return frmEventOnPinClick_LoadData.call(this);
}

function p2kwiet7980150034_map1_onBoundsChange_seq0() {}

function p2kwiet7980150034_map1_onMapClick_seq0() {}

function p2kwiet7980150034_map1_onPinClick_seq0() {
    alert("OnPinClick Event Triggered \nlatitude: " + arguments[0].lat + "\nlongitude: " + arguments[0].lon)
}

function p2kwiet7980150040_button1178224054301909_onClick_seq0(eventobject) {
    frmEventOnMapClick.show();
}

function p2kwiet7980150040_button1178224054301915_onClick_seq0(eventobject) {
    frmEventOnBoundsChanged.show();
    frmEventOnBoundsChanged.map1.locationdata = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        image: "pin_a.png"
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",
        image: "pin_b.png"
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
        image: "pin_a.png"
    }];
}

function p2kwiet7980150040_button1182930288299569_onClick_seq0(eventobject) {
    frmEventOnPinClick.show();
}

function p2kwiet7980150073_button1928198850300369_onClick_seq0(eventobject) {
    frmShowCallout.show();
}

function p2kwiet7980150073_button1928198850300501_onClick_seq0(eventobject) {
    frmIsVisibleRW.show();
}

function p2kwiet7980150073_button1928198850300519_onClick_seq0(eventobject) {
    frmLocationData.show();
}

function p2kwiet7980150073_button1928198850300609_onClick_seq0(eventobject) {
    frmAddress.show();
}

function p2kwiet7980150073_button1928198850300651_onClick_seq0(eventobject) {
    frmModeIDE.show();
}

function p2kwiet7980150073_button1928198850300669_onClick_seq0(eventobject) {
    frmShowZoomControl.show();
}

function p2kwiet7980150073_button1928198850300711_onClick_seq0(eventobject) {
    frmZoomLevelInIDE.show();
}

function p2kwiet7980150073_button1928198850300729_onClick_seq0(eventobject) {
    frmEvents.show();
}

function p2kwiet7980150073_button1928198850300747_onClick_seq0(eventobject) {
    frmMethods.show();
}

function p2kwiet7980150073_button200073308733848_onClick_seq0(eventobject) {
    frmCustomPin.show();
}

function p2kwiet798015007_button1928198850300069_onClick_seq0(eventobject) {
    var location = {
        lat: "17.383406",
        lon: "78.484268",
        name: "Hyderabad",
        desc: "A.P. India",
        image: "greensh.png",
        showcallout: true
    };
    frmAnimateToLocation.map1.animateToLocation(location);
}

function p2kwiet798015007_frmAnimateToLocation_preshow_seq0(eventobject, neworientation) {}

function p2kwiet798015007_map1_onBoundsChange_seq0() {}

function p2kwiet798015007_map1_onMapClick_seq0() {}

function p2kwiet798015007_map1_onPinClick_seq0() {}

function p2kwiet7980150080_button1930284220307183_onClick_seq0(eventobject) {
    frmIsVisibleRW.map1.isVisible = true;
}

function p2kwiet7980150080_button1930284220307193_onClick_seq0(eventobject) {
    frmIsVisibleRW.map1.isVisible = false;
}

function p2kwiet7980150080_map1_onBoundsChange_seq0() {}

function p2kwiet7980150080_map1_onMapClick_seq0() {}

function p2kwiet7980150080_map1_onPinClick_seq0() {}

function p2kwiet7980150084_frmLocationData_postshow_seq0(eventobject, neworientation) {
    return frmLocationData_LoadData.call(this);
}

function p2kwiet7980150084_map1_onBoundsChange_seq0() {}

function p2kwiet7980150084_map1_onMapClick_seq0() {}

function p2kwiet7980150084_map1_onPinClick_seq0() {}

function p2kwiet7980150091_button118198246454028_onClick_seq0(eventobject) {
    frmClearMap.show();
}

function p2kwiet7980150091_button118198246454519_onClick_seq0(eventobject) {
    frmAnimateToLocation.show();
}

function p2kwiet7980150091_button1182930288299822_onClick_seq0(eventobject) {
    frmDismissCallout.show();
}

function p2kwiet7980150091_button1182930288299824_onClick_seq0(eventobject) {
    frmNavigateTo.show();
}

function p2kwiet7980150097_button1178253845299830_onClick_seq0(eventobject) {
    frmModeIDENormal.show();
}

function p2kwiet7980150097_button1178253845299831_onClick_seq0(eventobject) {
    frmModeIDESatelite.show();
}

function p2kwiet7980150097_button1178253845299832_onClick_seq0(eventobject) {
    frmModeIDETraffic.show();
}