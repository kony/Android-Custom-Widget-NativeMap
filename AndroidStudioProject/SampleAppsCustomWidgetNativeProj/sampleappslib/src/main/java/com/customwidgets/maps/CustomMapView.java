package com.customwidgets.maps;

import android.content.Context;
import android.util.AttributeSet;
import android.view.MotionEvent;

/**
 * To see business maps, comment the import statements in below block starting with 'import com.google.android.gms.maps.*'.
 *  And remove the comments for import statements in next block which are starting with 'import com.google.android.m4b.maps.*'.
 */

/****************************************************/
import com.google.android.gms.maps.GoogleMapOptions;
import com.google.android.gms.maps.MapView;
/****************************************************/

/************************************************
 import com.google.android.m4b.maps.GoogleMapOptions;
 import com.google.android.m4b.maps.MapView;
 ************************************************/

/**
 * The CustomMapView is the actual mapview in this CustomWidget which extends Google MapView.
 * The instance of this class is created by the CustomMapFragment in onCreateView.
 * We are using this class to Grab Touch Events to resolve double scrolling issue
 * when placed in Scrollable container widgets by overriding onInterceptTouchEvent method.
 */
public class CustomMapView extends MapView {

    public CustomMapView(Context arg0) {
        super(arg0);
    }

    public CustomMapView(Context arg0, AttributeSet arg1, int arg2) {
        super(arg0, arg1, arg2);
    }

    public CustomMapView(Context arg0, AttributeSet arg1) {
        super(arg0, arg1);
    }

    public CustomMapView(Context arg0, GoogleMapOptions arg1) {
        super(arg0, arg1);
    }
    /**
     * Implement this method to intercept all touch screen motion events.
     * This allows you to watch events as they are dispatched to your children,
     * and take ownership of the current gesture at any point.
     * Current implementation requests its parent not to grab any events destined for this view
     * For more info refer to
     * http://developer.android.com/reference/android/view/ViewGroup.html#onInterceptTouchEvent(android.view.MotionEvent)
     * @param ev
     *            The motion event being dispatched down the hierarchy
     * @return boolean
     * 		Return true to steal motion events from the children and have them dispatched to this ViewGroup through onTouchEvent()
     */
    public boolean onInterceptTouchEvent(MotionEvent ev) {
        int action = ev.getAction();
        switch (action) {
            case MotionEvent.ACTION_DOWN:
                this.getParent().requestDisallowInterceptTouchEvent(true);
                break;
        }
        return super.onInterceptTouchEvent(ev);
    }

}
