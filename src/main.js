import { showStatus } from "./js/show"
import vnetwork from "./vue-network.vue"


const VueNetwork = {
  install (Vue, options = { displayNotification: true }) { //notifications displayed by default

    Vue.prototype.$isOnline = window.navigator.onLine;
    Vue.component("vnetwork", vnetwork);

    Vue.mixin ({
      created () {
        let status = this.$isOnline

        window.addEventListener('offline', function(e) { 
           status = false; 

           return (options.displayNotification === true)
             ? showStatus(status)
             : null;
        });
        
        window.addEventListener('online', function(e) { 
          status = true; 

          return (options.displayNotification === true)
            ? showStatus(status)
            : null;
        });
      },

    })

  }
}

export default VueNetwork;