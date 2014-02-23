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

## Get the App started in the browser during development

Simple run `grunt` =)

It uses Grunt connect and Grunt watch to start up a static Node file
server and to watch for changes on the Less files (which will recompile automatically).

You may also be interesting in installing the LiveReload browser extension (assuming
you're developing in Chrome). This will automatically refresh the page when the
Less files recompile.