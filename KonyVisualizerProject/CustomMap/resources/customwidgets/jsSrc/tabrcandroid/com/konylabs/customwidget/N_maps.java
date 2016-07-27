package com.konylabs.customwidget;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;

import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;
import com.konylabs.api.ui.KonyCustomWidget;

public class N_maps extends JSLibrary {

 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new CustomMapWidget();
 return libs;
 }
		
		public N_maps(){
	}
	public String getNameSpace() {
		return "maps";
	}

static class CustomMapWidget extends JSLibrary {
 
 
	public static final String clear = "clear";
 
 
	public static final String dismissCallout = "dismissCallout";
 
 
	public static final String animateToLocation = "animateToLocation";
 
 
	public static final String navigateToIndex = "navigateToIndex";
 
	String[] methods = { clear, dismissCallout, animateToLocation, navigateToIndex };
 String[] props = { "displayMode", "zoomLevel", "showZoomControl", "width", "height", "onPinClick", "onMapClick", "onBoundsChange", "locationData", "address" };
 private static Hashtable<String, Integer> propertyTypeMappings = null;
 public Object createInstance(final Object[] properties, long jsobject) {
 if(propertyTypeMappings == null) {
 propertyTypeMappings = new Hashtable<String, Integer>();
 propertyTypeMappings.put("displayMode",KonyCustomWidget.NATIVE_DATA_TYPE_STRING);
 propertyTypeMappings.put("zoomLevel",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("showZoomControl",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_BOOLEAN);
 propertyTypeMappings.put("width",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("height",KonyCustomWidget.NATIVE_DATA_TYPE_PRIMITIVE_INT);
 propertyTypeMappings.put("onPinClick",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 propertyTypeMappings.put("onMapClick",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 propertyTypeMappings.put("onBoundsChange",KonyCustomWidget.NATIVE_DATA_TYPE_FUNCTION);
 propertyTypeMappings.put("locationData",KonyCustomWidget.NATIVE_DATA_TYPE_VECTOR);
 propertyTypeMappings.put("address",KonyCustomWidget.NATIVE_DATA_TYPE_HASHTABLE);
 
 }

 KonyCustomWidget widget = new com.customwidgets.maps.CustomMapWidget();
 widget.initProperties(properties,jsobject,propertyTypeMappings);
 return widget;
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 0 || paramLen > 1){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 ret = this.clear(params[0]
 );
 
 			break;
 		case 1:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable location1 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 location1 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.dismissCallout(params[0]
 ,location1
 );
 
 			break;
 		case 2:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable location2 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 location2 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.animateToLocation(params[0]
 ,location2
 );
 
 			break;
 		case 3:
 if (paramLen < 2 || paramLen > 3){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 Integer index3 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 index3 = ((Double)params[0+inc]).intValue();
 }
 Boolean showcallout3 = null;
 if(params[1+inc] != null && params[1+inc] != LuaNil.nil) {
 showcallout3 = (Boolean)params[1+inc];
 }
 ret = this.navigateToIndex(params[0]
 ,index3
 ,showcallout3
 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "CustomMapWidget";
	}
	public String[] getProperties() {
		// TODO Auto-generated method stub
		return props;
	}
	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] clear( Object self ){
 
		Object[] ret = null;
 ((com.customwidgets.maps.CustomMapWidget)self).clear( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] dismissCallout( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.customwidgets.maps.CustomMapWidget)self).dismissCallout( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] animateToLocation( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.customwidgets.maps.CustomMapWidget)self).animateToLocation( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] navigateToIndex( Object self ,Integer inputKey0
 ,Boolean inputKey1
 ){
 
		Object[] ret = null;
 ((com.customwidgets.maps.CustomMapWidget)self).navigateToIndex( inputKey0.intValue() , inputKey1.booleanValue() );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

};
