import Vue from 'vue'
import Firebase from 'firebase'

const firebasePlugin = {
  install() {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$firebase) {
      Vue.prototype.$firebase = Firebase.initializeApp({
        apiKey: "AIzaSyAZAk2-EW-QxWYAhN9Ict0zKmyZO0ikjmE",
        authDomain: "gfriend-malaysia.firebaseapp.com",
        databaseURL: "https://gfriend-malaysia.firebaseio.com",
        projectId: "gfriend-malaysia",
        storageBucket: "gfriend-malaysia.appspot.com",
        messagingSenderId: "695370611541"
      })
    }
  }

}

Vue.use(firebasePlugin)

export default (ctx) => {
  const { app, store } = ctx

  app.$firebase = Vue.prototype.$firebase
  ctx.$firebase = Vue.prototype.$firebase
  if (store) {
    store.$firebase = Vue.prototype.$firebase
  }
}
