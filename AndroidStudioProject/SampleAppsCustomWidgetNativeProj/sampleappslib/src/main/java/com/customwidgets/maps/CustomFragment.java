package com.customwidgets.maps;

import java.lang.reflect.Method;

import android.R.color;
import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.widget.RelativeLayout;

import com.google.android.gms.maps.OnMapReadyCallback;
import com.konylabs.android.KonyMain;

/**
 * To see business maps, comment the import statements in below block starting with 'import com.google.android.gms.maps.*'.
 *  And remove the comments for import statements in next block which are starting with 'import com.google.android.m4b.maps.*'.
 */

/*******************************************/
import com.google.android.gms.maps.GoogleMap;
/******************************************/

/********************************************
 import com.google.android.m4b.maps.GoogleMap;
 *******************************************/

/**
 * The CustomFragment is a Fragment created in the CustomMapWidget Class.
 * This acts as container to mapview.
 */
public class CustomFragment extends Fragment {
    private CustomMapView mCustomMapView;
    private GoogleMap gMap;
    private CustomMapWidget mCustomMapWidget;
    private RelativeLayout layout;

    public void setCustomMapWidget(CustomMapWidget aCustomMapWidget) {
        this.mCustomMapWidget = aCustomMapWidget;
    }

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {


        /**
         * To see business maps, comment the import statements in below block starting with 'import com.google.android.gms.maps.*'.
         *  And remove the comments for import statements in next block which are starting with 'import com.google.android.m4b.maps.*'.
         */

        /*******************************************/
        try {
            Class classObject = Class
                    .forName("com.google.android.gms.maps.MapsInitializer");
            Method method = classObject.getMethod("initialize",
                    Context.class);
            method.invoke(classObject, getActivity());

        } catch (Exception e) {
            e.printStackTrace();
        }
        /*******************************************/

        /*********************************************
         try {
         Class classObject = Class
         .forName("com.google.android.m4b.maps.MapsInitializer");
         Method method = classObject.getMethod("initialize",
         Context.class);
         method.invoke(classObject, getActivity());

         } catch (Exception e) {
         e.printStackTrace();
         }
         *********************************************/

        mCustomMapView = new CustomMapView(KonyMain.getActContext());
        mCustomMapView.onCreate(savedInstanceState);

        /**
         * Hack suggested here to avoid black patches when map is embedded in scroll view
         * and scrolled after locking screen and unlocking it over map
         * http://stackoverflow.com/questions/13746351/mapfragment-in-scrollview
         */

        layout = new RelativeLayout(KonyMain.getAppContext());
        mCustomMapView.setLayoutParams(new RelativeLayout.LayoutParams(
                LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));
        layout.addView((View) mCustomMapView);

        View transparentView = new View(KonyMain.getAppContext());

        transparentView.setBackgroundColor(getResources().getColor(color.transparent));
        transparentView.setLayoutParams(new RelativeLayout.LayoutParams(
                LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));
        layout.addView(transparentView);
        layout.setLayoutParams(new RelativeLayout.LayoutParams(
                LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));

        return layout;
    }

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    public void onResume() {
        super.onResume();
        mCustomMapView.onResume();
    }

    public void onPause() {
        super.onPause();
        mCustomMapView.onPause();
    }

    public void onDestroy() {
        super.onDestroy();
        mCustomMapView.onDestroy();
    }

    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        mCustomMapView.getMapAsync(new OnMapReadyCallback() {
            @Override
            public void onMapReady(GoogleMap googleMap) {
                gMap = googleMap;
                mCustomMapWidget.setGoogleMap(gMap);
            }
        });

    }
}