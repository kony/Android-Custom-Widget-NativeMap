package com.customwidgets.maps;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Vector;

import android.content.Context;
import android.location.Address;
import android.location.Geocoder;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup.LayoutParams;
import android.widget.LinearLayout;

import com.konylabs.android.KonyMain;
import com.konylabs.api.ui.KonyCustomWidget;
import com.konylabs.vm.Function;

/**
 * To see business maps, comment the import statements in below block starting with 'import com.google.android.gms.maps.*'.
 *  And remove the comments for import statements in next block which are starting with 'import com.google.android.m4b.maps.*'.
 */

/*****************************************************************/
import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.GoogleMap.OnCameraChangeListener;
import com.google.android.gms.maps.GoogleMap.OnMapClickListener;
import com.google.android.gms.maps.GoogleMap.OnMarkerClickListener;
import com.google.android.gms.maps.Projection;
import com.google.android.gms.maps.model.BitmapDescriptor;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.CameraPosition;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.maps.model.VisibleRegion;

/******************************************************************/

/****************************************************************
 import com.google.android.m4b.maps.CameraUpdateFactory;
 import com.google.android.m4b.maps.GoogleMap;
 import com.google.android.m4b.maps.GoogleMap.OnMapClickListener;
 import com.google.android.gms.maps.GoogleMap.OnCameraChangeListener;
 import com.google.android.m4b.maps.GoogleMap.OnMarkerClickListener;
 import com.google.android.m4b.maps.Projection;
 import com.google.android.m4b.maps.model.BitmapDescriptor;
 import com.google.android.m4b.maps.model.BitmapDescriptorFactory;
 import com.google.android.m4b.maps.model.LatLng;
 import com.google.android.m4b.maps.model.Marker;
 import com.google.android.m4b.maps.model.MarkerOptions;
 import com.google.android.m4b.maps.model.VisibleRegion;
 **************************************************************/

/**
 * This class represents the custom widget. Which has implemented all the
 * mandatory methods defined in CustomWidget Contract and also methods which
 * exposed to platform to call. This class will hold the actual GoogleMap object
 * reference.
 *
 */
public class CustomMapWidget extends KonyCustomWidget implements
        OnMapClickListener, OnMarkerClickListener, OnCameraChangeListener {

    private final String MAP_MODE_NORMAL = "Normal";
    private final String MAP_MODE_SATELLITE = "Satellite";
    private final String MAP_MODE_TRAFFIC = "Traffic";

    private final int MAP_DISPLAY_MODE_NORMAL = 1;
    private final int MAP_DISPLAY_MODE_SATELLITE = 2;
    private final int MAP_DISPLAY_MODE_TRAFFIC = 3;

    private final String TAG = "CustomMapWidget";

    private final String ATTR_MARKER_ON_CLICK_CB = "onPinClick";
    private final String ATTR_MAP_ON_CLICK_CB = "onMapClick";
    private final String ATTR_MAP_ON_BOUNDS_CHANGE_CB = "onBoundsChange";

    private LinearLayout mLayout;
    private GoogleMap gMap;

    private ArrayList<Marker> markerList = new ArrayList<Marker>();
    private ArrayList<PinLocationData> pinLocations = new ArrayList<PinLocationData>();
    private Vector<Hashtable> locVector = new Vector<Hashtable>();

    private String PROP_MAP_LOCATION_DATA = "locationData";
    private String PROP_MAP_ADDRESS = "address";
    private String PROP_MAP_DISPLAYMODE = "displayMode";
    private String PROP_MAP_SHOWZOOMCONTROL = "showZoomControl";
    private String PROP_MAP_ZOOMLEVEL = "zoomLevel";

    private Object preShowLocationDataParam;
    private Object preShowAddressParam;
    private Object preShowDisplayModeParam;
    private Object preShowshowZoomControlParam;
    private Object preShowZoomLevelParam;

    private int displayMode = MAP_DISPLAY_MODE_NORMAL;
    private float zoomLevel = 1;
    private boolean bZoomControl = true;
    private int width;
    private int height;

    /**
     * This method is called by the platform whenever a new instance of custom
     * widget view is required. The container which will hold the mapview will
     * be created in this method. The properties given in IDE and preShow are
     * retrieved and stored in this method.
     *
     * @param context
     *            context is used for creating the layout
     * @return View the container of the mapview
     */

    @Override
    public View onCreateView(Context context) {
        mLayout = new LinearLayout(context);
        String ID = getProperty("ID").toString();
        mLayout.setId(ID.hashCode());

        preShowshowZoomControlParam = getProperty(PROP_MAP_SHOWZOOMCONTROL);

        preShowZoomLevelParam = getProperty(PROP_MAP_ZOOMLEVEL);

        preShowDisplayModeParam = getPropertyFromModel(PROP_MAP_DISPLAYMODE);

        preShowLocationDataParam = getPropertyFromModel(PROP_MAP_LOCATION_DATA);

        preShowAddressParam = getPropertyFromModel(PROP_MAP_ADDRESS);

        Object widthParam = getPropertyFromModel("width");
        if (widthParam != null) {
            width = (int) (((double) ((Integer) widthParam) / 100) * getDisplayWidth());
        }

        Object heightParam = getPropertyFromModel("height");
        if (heightParam != null) {
            height = (int) (((double) ((Integer) heightParam) / 100) * getDisplayHeight());
        }

        FragmentManager FM = KonyMain.getActContext()
                .getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = FM.beginTransaction();
        CustomFragment mapFragment = new CustomFragment();
        mapFragment.setCustomMapWidget(this);
        fragmentTransaction.add(Math.abs(ID.hashCode()), mapFragment, ID);
        fragmentTransaction.commitAllowingStateLoss();

        mLayout.setLayoutParams(new LayoutParams(width, height));

        return mLayout;
    }

    /**
     * This method is called by the platform just before View instance is freed
     * by the platform. all the objects intialized in onCreateView method should
     * be nullified, otherwise would lead to Out of Memory issues.
     *
     * @param view
     *            the view that created in onCreateView Method
     * @return void
     */
    @Override
    public void onDestroyView(View view) {
        mLayout = null;
        gMap = null;
    }

    @Override
    public void setHeight(int height) {
    }

    @Override
    public void setWidth(int width) {

    }

    /**
     * This method is called by the platform whenever a value is assigned to
     * custom widget property by the application.
     *
     * @param key
     *            propertyName that to be set
     * @param value
     *            the property value that to be set
     * @return void returns nothing
     */
    @Override
    public void onPropertySet(View arg0, Object key, Object value) {
        if (key.equals(PROP_MAP_LOCATION_DATA)) {
            clearAll();
            locVector = (Vector<Hashtable>) value;
            setLocationData();
        } else if (key.equals(PROP_MAP_ADDRESS)) {
            setMapAddress(value);
        } else if (key.equals(PROP_MAP_DISPLAYMODE)) {
            setDisplayMode(value.toString());
        }
    }

    /**
     * This method is called by the CustomFragemt Class after the Fragment is
     * created. The GoogleMap Object which retrieved from the mapview is passed
     * as an argument
     *
     * @param gMap
     *            The googlemap object reference on which we perform all
     *            operations
     * @return void
     */
    protected void setGoogleMap(GoogleMap gMap) {
        this.gMap = gMap;
        init();
    }

    /**
     * Once the google map object is retrieved we need to set the properties. In
     * this method we are setting the all properties to the google map which
     * have given in IDE and Form preShow. And also we are registering to map
     * click, marker click, camera change events.
     *
     * @return void
     */
    private void init() {
        if (gMap != null) {
            // Add all functions here as we don't know when map gets
            // initialized.
            gMap.setOnMapClickListener(this);
            gMap.setOnMarkerClickListener(this);
            gMap.setOnCameraChangeListener(this);

            if (preShowshowZoomControlParam != null
                    && preShowshowZoomControlParam.toString().equals("false")) {
                bZoomControl = false;
            }

            if (preShowZoomLevelParam != null) {
                zoomLevel = (int) Double.parseDouble(preShowZoomLevelParam
                        .toString());
            }
            gMap.animateCamera(CameraUpdateFactory.zoomTo(zoomLevel));

            setDisplayMode(displayMode);
            setZoomControls(bZoomControl);

            if (preShowLocationDataParam != null) {
                clearAll();
                locVector = (Vector<Hashtable>) preShowLocationDataParam;
                setLocationData();
            }

            if (preShowAddressParam != null) {
                setMapAddress(preShowAddressParam);
            }

            if (preShowDisplayModeParam != null) {
                setDisplayMode(preShowDisplayModeParam.toString());
            }
        }
    }

    /**
     *
     * In this method we will convert the location data into custom
     * object(PinLocationData). Those objects will be added to the vector. Later
     * that vector will be used in addPinsToMap method
     *
     * @return void
     */
    private void setLocationData() {
        if (locVector != null && locVector.size() > 0) {
            int noOfLocations = locVector.size();
            PinLocationData itmpPinLocation = null;

            for (int i = 0; i < noOfLocations; i++) {
                Hashtable location = locVector.elementAt(i);
                itmpPinLocation = getLocationDataFromHashtable(location);
                if (itmpPinLocation != null)
                    pinLocations.add(itmpPinLocation);
            }
            dismissAllCallouts();// remove all callouts
            // before changing
            // location data
            addPinsToMap();
        }
    }

    /**
     *
     * this method is used for converting the location data in Hashtable to
     * PinLocationData
     *
     * @param locationData
     *            location data in Hashtable
     * @return PinLocationData Converted Data
     */
    private PinLocationData getLocationDataFromHashtable(Hashtable locationData) {
        PinLocationData pinLocation = null;

        String latString = null;
        if (locationData.get("lat") != null) {
            latString = locationData.get("lat").toString();
        } else {
            return null;
        }
        float lat = (new Double(latString)).floatValue();

        String lngString = null;
        if (locationData.get("lon") != null) {
            lngString = locationData.get("lon").toString();
        } else {
            return null;
        }
        float lng = (new Double(lngString)).floatValue();

        Object obj = locationData.get("name");
        String sDesc = (obj != null) ? obj.toString() : null;

        obj = locationData.get("desc");
        String lDesc = (obj != null) ? obj.toString() : null;

        obj = locationData.get("image");
        String img = (obj != null) ? obj.toString() : null;

        obj = locationData.get("showcallout");
        boolean showcallout = (obj != null) ? ((Boolean) obj).booleanValue()
                : true;

        pinLocation = new PinLocationData(lat, lng, sDesc, lDesc, showcallout,
                img);

        return pinLocation;
    }

    private void addPinsToMap() {

        if ((gMap != null) && (pinLocations != null && pinLocations.size() > 0)) {
            PinLocationData pin;
            MarkerOptions markerOpt;
            Marker marker;
            BitmapDescriptor pinImage;

            int locCount = pinLocations.size();
            for (int i = 0; i < locCount; i++) {
                pin = pinLocations.get(i);
                String pinImgName = pin.img;
                int pinResID = getResourceID(pinImgName);
                if (pinResID != 0) {
                    pinImage = BitmapDescriptorFactory.fromResource(pinResID);
                } else {
                    pinImage = BitmapDescriptorFactory
                            .defaultMarker(BitmapDescriptorFactory.HUE_AZURE);
                }
                markerOpt = new MarkerOptions().position(
                        new LatLng(pin.lat, pin.lng)).icon(pinImage);
                if (pin.showcallout) {
                    markerOpt = markerOpt.title(pin.sDesc).snippet(pin.lDesc);
                }
                marker = gMap.addMarker(markerOpt);
                markerList.add(marker);
            }
            animateToPin(pinLocations.get(0));
        }
    }

    /**
     *
     * this method is used for getting the constant id of the resource by
     * passing the name
     *
     * @param resName
     *            name of the resource
     * @return int constant id of the resource
     */
    private int getResourceID(String resName) {
        int imageResId = 0;// 0 is invalid RESID
        if (resName == null)
            return imageResId;
        String imgFileName;
        int index = resName.indexOf('.'); // index == -1 if the char is not
        // found
        if (index < 1)
            imgFileName = resName;
        else
            imgFileName = resName.substring(0, index);
        if (Character.isDigit(imgFileName.charAt(0)))
            return imageResId;
        imgFileName = imgFileName.toLowerCase();

        imageResId = KonyMain
                .getAppContext()
                .getResources()
                .getIdentifier(imgFileName, "drawable",
                        KonyMain.getAppContext().getPackageName());
        return imageResId;

    }

    /**
     *
     * This callback returns the coordinates of clicked location on map.
     *
     * @param latLng
     *            LatLng Object on which the event is fired.
     * @return void
     */
    public void onMapClick(LatLng latLng) {
        Hashtable clickLoc = new Hashtable();
        clickLoc.put("lat", latLng.latitude);
        clickLoc.put("lon", latLng.longitude);

        Object objects[] = { clickLoc };

        Object mapClickCallBack = getPropertyFromModel(ATTR_MAP_ON_CLICK_CB);
        if (mapClickCallBack != null) {
            Function function = (Function) mapClickCallBack;
            try {
                function.executeAsync(objects);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * This callback returns the changed bounds of map
     *
     * @param arg0
     *
     * @return void
     */
    @Override
    public void onCameraChange(CameraPosition arg0) {
        Object callback = getPropertyFromModel(ATTR_MAP_ON_BOUNDS_CHANGE_CB);
        if (callback != null) {
            Object objects[] = { getMapBounds() };
            Function function = (Function) callback;
            try {
                function.executeAsync(objects);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    /**
     *
     * This method is used for getting the map bounds
     *
     * @param arg0
     *
     * @return Hashtable bounds of the map
     */
    private Hashtable getMapBounds() {
        Hashtable bounds = new Hashtable();
        Hashtable center = new Hashtable();
        Hashtable northeast = new Hashtable();
        Hashtable southwest = new Hashtable();
        LatLng ptNE, ptSW;
        // Map Center
        center.put("lat", gMap.getCameraPosition().target.latitude);
        center.put("lon", gMap.getCameraPosition().target.longitude);
        bounds.put("center", center);

        Projection proj = gMap.getProjection();
        VisibleRegion visRegion = proj.getVisibleRegion();

        // Top Right or North East Corner
        ptNE = visRegion.latLngBounds.northeast;
        northeast.put("lat", ptNE.latitude);
        northeast.put("lon", ptNE.longitude);
        bounds.put("northeast", northeast);

        // Bottom Left or South West Corner
        ptSW = visRegion.latLngBounds.southwest;
        southwest.put("lat", ptSW.latitude);
        southwest.put("lon", ptSW.longitude);
        bounds.put("southwest", southwest);

        // Latitude span
        bounds.put("latspan",
                Math.abs(Math.abs(ptNE.latitude) + Math.abs(ptSW.latitude)));
        // Longitude span
        bounds.put("lonspan",
                Math.abs(Math.abs(ptNE.longitude) + Math.abs(ptSW.longitude)));
        return bounds;

    }

    int selectedindex = -1;

    /**
     *
     * This is a callback method when the pin is clicked on the map. In this
     * method we are getting the location info from marker passing it through
     * event to the platform
     *
     * @param marker
     *            marker on which we clicked
     *
     * @return boolean event handled or not as boolean
     */
    public boolean onMarkerClick(Marker marker) {
        selectedindex = getIndexFromMarker(marker);

        Hashtable location = locVector.elementAt(selectedindex);
        Object objects[] = { location };

        Object markerClickCallBack = getPropertyFromModel(ATTR_MARKER_ON_CLICK_CB);
        if (markerClickCallBack != null) {
            Function function = (Function) markerClickCallBack;
            try {
                function.executeAsync(objects);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return false;
    }

    private int getIndexFromMarker(Marker marker) {
        int ret = 0;
        int index = 0;
        for (Marker m : markerList) {
            if (m.equals(marker)) {
                ret = index;
                break;
            }
            index++;
        }
        return ret;
    }

    private void setDisplayMode(String mode) {
        int modetype = -1;
        if (mode.equals(MAP_MODE_NORMAL)) {
            modetype = MAP_DISPLAY_MODE_NORMAL;
        } else if (mode.equals(MAP_MODE_SATELLITE)) {
            modetype = MAP_DISPLAY_MODE_SATELLITE;
        } else if (mode.equals(MAP_MODE_TRAFFIC)) {
            modetype = MAP_DISPLAY_MODE_TRAFFIC;
        }
        setDisplayMode(modetype);
    }

    private void setDisplayMode(int mapDisplayMode) {
        this.displayMode = mapDisplayMode;

        if (gMap != null) {
            if (MAP_DISPLAY_MODE_TRAFFIC != displayMode)
                gMap.setTrafficEnabled(false);
            switch (displayMode) {
                case MAP_DISPLAY_MODE_NORMAL:
                    gMap.setMapType(GoogleMap.MAP_TYPE_NORMAL);
                    break;
                case MAP_DISPLAY_MODE_SATELLITE:
                    gMap.setMapType(GoogleMap.MAP_TYPE_SATELLITE);
                    break;
                case MAP_DISPLAY_MODE_TRAFFIC:
                    gMap.setMapType(GoogleMap.MAP_TYPE_NORMAL);
                    gMap.setTrafficEnabled(true);
                    break;
            }
        }
    }

    private void setZoomLevel(int zlevel) {
        if (gMap != null)
            gMap.animateCamera(CameraUpdateFactory.zoomTo(zlevel));
        zoomLevel = zlevel;
    }

    private void setZoomControls(boolean zoomflag) {
        this.bZoomControl = zoomflag;
        if (gMap != null)
            gMap.getUiSettings().setZoomControlsEnabled(zoomflag);
    }

    private void animateToPin(PinLocationData pin) {
        if (gMap != null) {
            Double lat = (double) pin.lat;
            Double lng = (double) pin.lng;
            gMap.animateCamera(CameraUpdateFactory.newLatLngZoom(new LatLng(
                    lat, lng), zoomLevel));
        }
    }

    /**
     *
     * This is a custom class to store the location information.
     *
     */
    private class PinLocationData {
        public float lat;
        public float lng;
        public String sDesc;
        public String lDesc;
        public String img;
        public boolean showcallout;

        public PinLocationData(float lat, float lng, String sDesc,
                               String lDesc, boolean aShowcallout, String img) {
            this.lat = lat;
            this.lng = lng;
            this.sDesc = sDesc;
            this.lDesc = lDesc;
            this.showcallout = aShowcallout;
            if (img != null && !img.trim().equals(""))
                this.img = img;
        }

    }

    private void setMapAddress(Object mapAddress) {
        if (mapAddress != null) {
            String address = ((Hashtable) mapAddress).get("location")
                    .toString();
            if (address != null)
                setAddress(address);
        }
    }

    private void setAddress(final String address) {
        new Thread(new Runnable() {
            public void run() {

                Geocoder geoCoder = new Geocoder(KonyMain.getActContext());
                List<Address> addressList = null;
                try {
                    addressList = geoCoder.getFromLocationName(address, 1);
                } catch (IOException e) {
                    Log.d(TAG, "" + e, e);
                }
                if (addressList != null && addressList.size() > 0) {
                    Address addr = addressList.get(0);
                    StringBuffer lDesc = new StringBuffer();
                    int maxIndex = addr.getMaxAddressLineIndex();
                    for (int i = 0; i <= maxIndex; i++) {
                        lDesc.append(addr.getAddressLine(i)).append(" \n");
                    }
                    final Hashtable adrsTable = new Hashtable();
                    adrsTable.put("lat", (float) addr.getLatitude());
                    adrsTable.put("lon", (float) addr.getLongitude());
                    adrsTable.put("name", addr.getLocality());
                    adrsTable.put("desc", lDesc.toString());
                    adrsTable.put("showcallout", true);
                    adrsTable.put("addressFromLocationName", address);

                    KonyMain.getActContext().runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            clearAll();
                            locVector.add(adrsTable);
                            setLocationData();
                        }
                    });

                }
            }
        }).start();
    }

    private void clearAll(){
        for (Marker m : markerList)
            m.remove();
        markerList.clear();
        pinLocations.clear();
        locVector.clear();
        if (gMap != null) {
            gMap.clear();
        }
    }

    /**
     * Clears all the pins on the map.
     */
    public void clear() {
        KonyMain.getActContext().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                for (Marker m : markerList)
                    m.remove();
                markerList.clear();
                pinLocations.clear();
                locVector.clear();
                gMap.clear();
            }
        });
    }

    /**
     * This method exposed to JavaScript for navigating to the specific location without placing any pin.
     *
     * @param location
     *            the location to be navigated as a hashtable
     *
     * @return void
     */
    public void animateToLocation(Hashtable location) {
        final PinLocationData iPinLocation = getLocationDataFromHashtable(location);
        if (iPinLocation != null) {
            KonyMain.getActContext().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    animateToPin(iPinLocation);
                }
            });
        } else {
            Log.i(TAG, "Invalid Location Details");
        }
    }

    /**
     * This method exposed to JavaScript for navigating to a specific pin within in the existing pins.
     *
     * @param index
     *            the index of the pin
     *
     * @return void
     */
    public void navigateToIndex(int index, boolean showcallout) {
        animateMapToIndex(index, showcallout);
    }

    private void animateMapToIndex(final int index, final boolean showcallout) {
        KonyMain.getActContext().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                int ipincount = pinLocations.size();
                if (gMap != null && ipincount >= 0 && index < ipincount) {
                    PinLocationData pin = pinLocations.get(index);
                    if (markerList != null && markerList.size() >= 0
                            && showcallout) {
                        selectedindex = index;
                        Marker selectedMarker = markerList.get(index);
                        boolean isVisble = selectedMarker.isVisible();
                        // hack enable the marker before calling this api as it
                        // is not
                        // triggering getInfoWindow is marker is not visible
                        selectedMarker.setVisible(true);
                        selectedMarker.showInfoWindow();
                        selectedMarker.setVisible(isVisble);
                    }
                    animateToPin(pin);
                }
            }
        });

    }

    private void dismissAllCallouts() {
        if (markerList != null) {
            for (Marker m : markerList) {
                m.hideInfoWindow();
            }
        }
    }

    /**
     * This method exposed to JavaScript for dismissing a particular callout specified by location argument.
     *
     * @param location
     *            the location for which callout should be removed.
     *
     * @return void
     */
    public void dismissCallout(final Hashtable location) {
        KonyMain.getActContext().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                PinLocationData loc = getLocationDataFromHashtable(location);

                if (loc != null) {
                    for (Marker m : markerList) {

                        LatLng pos = m.getPosition();
                        if ((loc.lat == (float) pos.latitude)
                                && (loc.lng == (float) pos.longitude)) {
                            m.hideInfoWindow();
                            break;
                        }
                    }
                }
            }
        });
    }

    private int getDisplayWidth() {
        DisplayMetrics metrics = new DisplayMetrics();
        KonyMain.getActContext().getWindowManager().getDefaultDisplay()
                .getMetrics(metrics);
        return metrics.widthPixels;
    }

    private int getDisplayHeight() {
        DisplayMetrics metrics = new DisplayMetrics();
        KonyMain.getActContext().getWindowManager().getDefaultDisplay()
                .getMetrics(metrics);
        return metrics.heightPixels;
    }

}
