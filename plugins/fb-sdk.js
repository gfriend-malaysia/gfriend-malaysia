import Vue from 'vue'
Vue.prototype.$initFbSDK = () => {
	FB.init({
		appId            : '1563042540393386',
		autoLogAppEvents : true,
		xfbml            : true,
		version          : 'v2.11'
	})
}
