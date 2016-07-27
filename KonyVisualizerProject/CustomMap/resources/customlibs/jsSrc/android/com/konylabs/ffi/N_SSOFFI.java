package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.tokenUtils.SSOUtils;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_SSOFFI extends JSLibrary {

 
 
	public static final String saveToken = "saveToken";
 
 
	public static final String getToken = "getToken";
 
 
	public static final String deleteToken = "deleteToken";
 
	String[] methods = { saveToken, getToken, deleteToken };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[0];
 return libs;
 }



	public N_SSOFFI(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 2){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String item0 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 item0 = (java.lang.String)params[0];
 }
 java.lang.String key0 = null;
 if(params[1] != null && params[1] != LuaNil.nil) {
 key0 = (java.lang.String)params[1];
 }
 ret = this.saveToken( item0, key0 );
 
 			break;
 		case 1:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String key1 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 key1 = (java.lang.String)params[0];
 }
 ret = this.getToken( key1 );
 
 			break;
 		case 2:
 if (paramLen != 1){ return new Object[] {new Double(100),"Invalid Params"}; }
 java.lang.String key2 = null;
 if(params[0] != null && params[0] != LuaNil.nil) {
 key2 = (java.lang.String)params[0];
 }
 ret = this.deleteToken( key2 );
 
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
		return "SSOFFI";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] saveToken( java.lang.String inputKey0, java.lang.String inputKey1 ){
 
		Object[] ret = null;
 Boolean val = new Boolean(com.kony.tokenUtils.SSOUtils.insertToken( inputKey0
 , inputKey1
 ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] getToken( java.lang.String inputKey0 ){
 
		Object[] ret = null;
 java.lang.String val = com.kony.tokenUtils.SSOUtils.getToken( inputKey0
 );
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] deleteToken( java.lang.String inputKey0 ){
 
		Object[] ret = null;
 Boolean val = new Boolean(com.kony.tokenUtils.SSOUtils.deleteToken( inputKey0
 ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
};
