import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20a29ce2 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0a021abe = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _8bdd82c0 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _405a77a7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _181e6908 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _20a29ce2,
    name: "about"
  }, {
    path: "/login",
    component: _0a021abe,
    name: "login"
  }, {
    path: "/users",
    component: _8bdd82c0,
    name: "users"
  }, {
    path: "/",
    component: _405a77a7,
    name: "index"
  }, {
    path: "/users/:id",
    component: _181e6908,
    name: "users-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
