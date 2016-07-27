
var locationsWithCallouts=[{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
         image:"pin_a.png",
         showcallout:true,
        desc: "Phoenix infocity, Gachibowli"      
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
         image:"a.png",
         showcallout:true,
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh"
        
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
         image:"b.png",
         showcallout:true,
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh"
    }];
    
    
var locations=[{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
         image:"pin_a.png",
         showcallout:false,
        desc: "Phoenix infocity, Gachibowli"      
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
         image:"a.png",
         showcallout:false,
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh"
        
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
         image:"b.png",
         showcallout:false,
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh"
    }];

function frmAddress_LoadData(){
frmAddress.map1.address = {location:"nizampet"};
}

function frmClearMap_LoadData(){
frmClearMap["map1"]["locationData"] = locationsWithCallouts;
}

function frmCustomPin_LoadData(){
frmCustomPin["map1"]["locationData"] = locations;
}

function frmDismissCallout_LoadData(){
frmDismissCallout["map1"]["locationData"] = locationsWithCallouts;
}


function frmEventOnPinClick_LoadData(){
frmEventOnPinClick.map1.locationData = locations;
}

function frmEventsOnMapClick_LoadData(){
frmEventOnMapClick.map1.locationData = locations;
}

function frmEventOnBoundsChanged_LoadData(){
frmEventOnBoundsChanged.map1.locationData = locations;
}

function frmNavigateTo_LoadData(){
frmNavigateTo.map1.locationData = [ {
		lat : "37.792151",
		lon : "-122.453957",
		desc : "Presidio,San Francisco, CA, USA",
		name : "Bank Of America",
		image : "pin.png",
		showcallout : true
	},
	{
		lat : "37.788558",
		lon : "-122.449560",
		desc : "Presidio,San Francisco, CA, USA",
		name : "Presidio Heights Playground",
		image : "pin_a.png",
		showcallout : true 
	},
	{
		lat : "37.788895",
		lon : "-122.463913",
		desc : "Presidio,San Francisco, CA, USA",
		name : "Well Frag",
		image : "greensh.png",
		showcallout : true 
	},
	{
		lat : "37.789709",
		lon : "-122.387009",
		desc : "Embarcadero San Francisco, CA, USA",
		name : "Bank Of America",
		image : "greensh.png",
		showcallout : true
	},
	{
		lat : "37.791337",
		lon : "-122.400398",
		desc : "Downtown San Francisco, CA, USA",
		name : "W San Francisco",
		image : "pin.png",
		showcallout : true
	} ];
}

function frmAnimateToLocation_LoadData(){
frmAnimateToLocation.map1.locationData = [ {
		lat : "37.792151",
		lon : "-122.453957",
		desc : "Presidio,San Francisco, CA, USA",
		name : "Bank Of America",
		image : "pin.png",
		showcallout : true
	},
	{
		lat : "37.788558",
		lon : "-122.449560",
		desc : "Presidio,San Francisco, CA, USA",
		name : "Presidio Heights Playground",
		image : "pin_a.png",
		showcallout : true
	},
	{
		lat : "37.788895",
		lon : "-122.463913",
		desc : "Presidio,San Francisco, CA, USA",
		name : "Well Frag",
		image : "greensh.png",
		showcallout : true
	},
	{
		lat : "37.789709",
		lon : "-122.387009",
		desc : "Embarcadero San Francisco, CA, USA",
		name : "Bank Of America",
		image : "greensh.png",
		showcallout : true
	},
	{
		lat : "37.791337",
		lon : "-122.400398",
		desc : "Downtown San Francisco, CA, USA",
		name : "W San Francisco",
		image : "pin.png",
		showcallout : true
	} ];

}

function frmIsVisibleRW_LoadData(){
frmIsVisibleRW.map1.locationData = locations;
	
}

function frmLocationData_LoadData(){
frmLocationData["map1"]["locationData"] =[{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        showcallout:false      
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",
        showcallout:false
        
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
        showcallout:false
    }]
	
}

function frmModeIDENormal_DataLoad(){
frmModeIDENormal.map1.locationData = locations;
}


function frmModeIDESatelite_DataLoad(){
frmModeIDESatelite.map1.locationData = locations;
}



function frmModeIDETraffic_DataLoad(){
frmModeIDETraffic.map1.mode = constants.MAP_VIEW_MODE_TRAFFIC;
frmModeIDETraffic.map1.locationData=[{lat:"37.792151", lon:"-122.453957", name:"Presidio,San Francisco, CA, USA", desc:"Bank Of America",image:"pin_a.png"},
                                    {lat:"37.788895", lon:"-122.463913", name:"Presidio,San Francisco, CA, USA", desc:"Well Frag",image:"pin_a.png"},
                                    {lat:"37.789709", lon:"-122.387009", name:"Embarcadero San Francisco, CA, USA", desc:"Bank Of America", image:"pin_a.png"},
                                    {lat:"37.791337", lon:"-122.400398", name:"Downtown San Francisco, CA, USA", desc:"W San Francisco",image:"pin_a.png"},
                                    {lat:"37.790252", lon:"-122.411041", name:"Downtown San Francisco, CA, USA", dex:"Hotel Mark Tiwan",image:"pin_a.png"}
                                 ]
}

function frmShowCallout_LoadData(){
//Form JS File
    frmShowCallout["map1"]["locationData"] = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli",
        showcallout: true
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh",
        showcallout: true
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh",
        showcallout: true
    }]
}

function frmZoom2_LoadData(){
frmZoom2.map1.locationData = locations;
}

function frmZoom6_LoadData(){
frmZoom6.map1.locationData = locations;
}

function frmZoom10_LoadData(){
frmZoom10.map1.locationData = locations;
}

function frmZoom14_LoadData(){
frmZoom14.map1.locationData = locations;
}

function frmZoom18_LoadData(){
frmZoom18.map1.locationData = locations;
}

function frmZoom21_LoadData(){
frmZoom21.map1.locationData = locations;
}
function addCalloutData() {
    frmStartup["M4BMapViewcustom192741954029725"]["locationData"] = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
         image:"pin_a.png",
        desc: "Phoenix infocity, Gachibowli"      
    }, {
        lat: "17.441839",
        lon: "78.380928",
        name: "KonyLabs(old)",
         image:"a.png",
        desc: "Kony Solutions,, Unit 501, 9th Floor, Building No. 9,, Mindspace, APIIC Software Layout,, Hitech City, Madhapur,, Hyderabad, AP 500081., Vittal Rao Nagar, Hitech City, Hyderabad, Andhra Pradesh"
        
    }, {
        lat: "17.450378",
        lon: "78.388398",
        name: "My Residence",
         image:"b.png",
        desc: "408,SGR Appartments,Jaihind Enclave, Madhapur, Hyderabad, Andhra Pradesh"
    }]
    frmStartup.M4BMapViewcustom192741954029725.zoomLevel=5;
}


function setPin() {
    frmStartup["M4BMapViewcustom192741954029725"]["locationData"] = [{
        lat: "17.447326",
        lon: "78.371358",
        name: "KonyLabs(new)",
        desc: "Phoenix infocity, Gachibowli"      
    }]
}
function setAddress() {
    frmStartup.M4BMapViewcustom192741954029725.address = {location:"nizampet"};
}

function clearMap() {
    frmStartup.M4BMapViewcustom192741954029725.clear();
}

var lastPinClicked = null;

function onPinClick(loc) {
    lastPinClicked = loc
    kony.print("onPinClick loc = " + loc);
}
function closePopup() {
    if (lastPinClicked != null) frmDismissCallout.map1.dismissCallout(lastPinClicked);
}