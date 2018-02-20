# vue-network
A vue plugin that notifies your app and users when the network goes offline and back online.

# Features
Displays message to users as a notification, and disappears the the network is back online.;

![Screenshot](/src/img/Capture.png?raw=true "Sample notification")

Provides a global variable to help you figure out if you app is offline within your vue component;

    function getData() {
        if(this.$isOnline) {
            fetch();
        }else {
            return;
        }
    }

# How to install the plugin

`npm install vue-network-plugin --save`

# How to use
1.`//import the plugin in your main.js file`

`import VueNetwork from "vue-network-plugin"`

`Vue.use(VueNetwork)`

2.`//you can also disable the notification by passing a "displayNotification" parameter`
`Note:By default the notification is displayed`

`Vue.use(VueNetwork, {displayNotification: false})`

#TODO

Bundle the plugin using webpack. (please if you have any experience using webpack you can help out)

Twitter @codebyomar
