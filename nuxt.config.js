// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.NODE_ENV === 'production' ? {
	router: {
		base: '/gfriend/',
		middleware: ['middleware']
	}
} : {
	router: {
		middleware: ['middleware']
	}
}

module.exports = {
	mode: 'spa',
	build: {
		extractCSS: true,
		vendor: ['babel-polyfill', 'eventsource-polyfill', 'iview'],

	},
	...routerBase,
	css: ['~/assets/main.css', '~/assets/mdb.min.css', 'iview/dist/styles/iview.css'],
	loadingIndicator: {
		/*
		 ** See https://github.com/nuxt/nuxt.js/tree/dev/lib/app/views/loading for available loading indicators
		 ** You can add a custom indicator by giving a path
		 */
		name: 'chasing-dots',
		color: '#fcbb3a',
	},
	head: {
		title: 'GFriend Malaysia',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
			{ hid: 'gfriend', name: 'Gfriend Malaysia', content: 'Gfriend Malaysia' }
		],
		script: [
			// { src: 'https://mdbootstrap.com/previews/templates/landing-page/js/jquery-3.1.1.min.js' },
			// { src: 'https://mdbootstrap.com/previews/templates/landing-page/js/popper.min.js' },
			// { src: 'https://mdbootstrap.com/previews/templates/landing-page/js/bootstrap.min.js' },
			// { src: 'https://mdbootstrap.com/previews/templates/admin-dashboard/js/mdb.min.js' },
			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.compatibility.min.js' },
			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js' },
			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js' },
			// { src: 'https://connect.facebook.net/en_US/all.js' },
			// { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js' },
		],
		link: [
			{ rel: 'shortcut icon', href: '/gfriend.ico' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
			{ rel: 'stylesheet', href: 'https://mdbootstrap.com/previews/templates/landing-page/css/bootstrap.min.css' },
			{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css' },
			{ rel: 'stylesheet', href: 'https://mdbootstrap.com/previews/templates/landing-page/css/style.css' },
		],
	},
	plugins: [
		{ src: '~plugins/fb-sdk.js' },
		{ src: '~plugins/iview.js' },
	],
	loading: { color: '#3B8070' },
	manifest: {
		theme_color: '#51bcda',
		name: '여자친구 GFRIEND ',
		short_name: '여자친구 GFRIEND',
	},
	modules: [
		'@nuxtjs/pwa',
	]
}
