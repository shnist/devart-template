# Drawing Application

Installation guide for the application can be found here.

## Installing the App

### Global dependencies:

* Grunt-cli `npm install grunt-cli -g`
* Node / npm
* Python
* Cordova `npm install cordova -g`
* Java and Ant (for Android)

### Local dependencies

These are handled by Grunt. To install them run `npm install`

## Android SDK

You'll need to [install the Android SDK](http://docs.phonegap.com/en/3.1.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide) to build the .apk file locally.

It was a mission to get this to work on Linux... 

Some useful Cordova commands:
`cordova build`

Builds the Android package

`cordova emulate android`

Spins up an emulator instance for the App. You may need to create an [Android Virtual Device first](http://developer.android.com/tools/devices/index.html) first.

## Remote debuggin
If you want to remote debug on the emulator, open up your Chrome browser and in a new tab
type `chrome://inspect`. It should come up under devices.

## Get the App started in the browser during development

Simple run `grunt` =)

It uses Grunt connect and Grunt watch to start up a static Node file
server and to watch for changes on the Less files (which will recompile automatically).

You may also be interesting in installing the LiveReload browser extension (assuming
you're developing in Chrome). This will automatically refresh the page when the
Less files recompile.