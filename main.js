const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            // Solution
            description: 'A warm fuzzy pair of socks.'
            // Solution
        }
    }
})

// the options object is passed into the createApp function - as an anonymous object.
// It allows us to pass in some properties to configure our app.
// We can pass in optional data but the options object itself is NOT optional, it must be passed in, even if it's empty.
// We then use 'mountedApp' in index.html, mounting the app onto the DOM, which plugs into the div with the id of 'app',
// which we supply the name of when we create the app
// After that, everything within the 'app' div has access to everything in the vue app
// We can see above that we have passed in the data function

// Vue is reactive, so when the data changes, the UI accessing the data is also changed.
