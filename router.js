import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _60dae3b4 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _78c81223 = () => import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages\\user\\_id" */).then(m => m.default || m)
const _0f0e4f25 = () => import('..\\pages\\show\\_page.vue' /* webpackChunkName: "pages\\show\\_page" */).then(m => m.default || m)
const _527e716d = () => import('..\\pages\\job\\_page.vue' /* webpackChunkName: "pages\\job\\_page" */).then(m => m.default || m)
const _60fd4531 = () => import('..\\pages\\ask\\_page.vue' /* webpackChunkName: "pages\\ask\\_page" */).then(m => m.default || m)
const _e633984a = () => import('..\\pages\\item\\_id.vue' /* webpackChunkName: "pages\\item\\_id" */).then(m => m.default || m)
const _2a69e7aa = () => import('..\\pages\\new\\_page.vue' /* webpackChunkName: "pages\\new\\_page" */).then(m => m.default || m)
const _de414656 = () => import('..\\pages\\top\\_page.vue' /* webpackChunkName: "pages\\top\\_page" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _60dae3b4,
			name: "index"
		},
		{
			path: "/user/:id?",
			component: _78c81223,
			name: "user-id"
		},
		{
			path: "/show/:page?",
			component: _0f0e4f25,
			name: "show-page"
		},
		{
			path: "/job/:page?",
			component: _527e716d,
			name: "job-page"
		},
		{
			path: "/ask/:page?",
			component: _60fd4531,
			name: "ask-page"
		},
		{
			path: "/item/:id?",
			component: _e633984a,
			name: "item-id"
		},
		{
			path: "/new/:page?",
			component: _2a69e7aa,
			name: "new-page"
		},
		{
			path: "/top/:page?",
			component: _de414656,
			name: "top-page"
		}
    ],
    fallback: false
  })
}
