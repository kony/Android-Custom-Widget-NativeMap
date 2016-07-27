# Android-Custom-Widget-NativeMap

Application to showcase Android custom widget import in Kony Visualizer Enterprise.
There are 2 projects here. One is android native project that exposes the native map as a Kony custom widget. Other project is Kony Visualizer project that consumes this custom widget.

# Purpose
Sample Application to showcase how to develop a custom widget for android and integrate the same into Visualizer.

# To run the Kony application

1. Download the zip file and extract it.
2. Import the CustomMap application present in the Android-Custom-Widget-NativeMap-master\KonyVisualizerProject folder into Visualizer Enterprise
3. Change the map key in the application settings 
4. Also add the following entry in the "Project settings->Native->Android->Tags->Child tag entries"  by giving your map key
    <meta-data android:name="com.google.android.maps.v2.API_KEY" android:value="Your Map key here"/>
5. Build & run the app.
 
# Supported platforms:
**Mobile**
 * Android Mobile
 
**Supported Kony Visualizer Enterprise Version:** 7.1

# How to handle changes to the Android Studio Project?
The Android studio project to implement map as a custom widget is available in the folder AndroidStudioProject\SampleAppsCustomWidgetNativeProj
For making any changes to this,
1. import it into Android studio
2. Make the changes in the library module named 'sampleappslib'
3. Build it to generate the .aar file
4. Open the .aar with 7-zip and remove the konywidgets.jar file from the lib folder
5. Copy the resultant .aar file into the Kony Application folder <Your workspace>\CustomMap\resources\customwidgets\lib\android 
6. Build and launch the application
