import Vue from 'vue'
import Router from 'vue-router'

//containers
const DefaultContainer = () => import('../containers/DefaultContainer')
//Views
const Dashboard = () => import('../views/Dashboard')

// Views - Components
const Cards = () => import('../views/base/Cards')
const Forms = () => import('../views/base/Forms')
const Switches = () => import('../views/base/Switches')
const Tables = () => import('../views/base/Tables')
const Tabs = () => import('../views/base/Tabs')
const Breadcrumbs = () => import('../views/base/Breadcrumbs')
const Carousels = () => import('../views/base/Carousels')
const Collapses = () => import('../views/base/Collapses')
const Jumbotrons = () => import('../views/base/Jumbotrons')
const ListGroups = () => import('../views/base/ListGroups')
const Navs = () => import('../views/base/Navs')
const Navbars = () => import('../views/base/Navbars')
const Paginations = () => import('../views/base/Paginations')
const Popovers = () => import('../views/base/Popovers')
const ProgressBars = () => import('../views/base/ProgressBars')
const Tooltips = () => import('../views/base/Tooltips')

// Views - Pages
const Page404 = () => import('../views/pages/Page404')
const Page500 = () => import('../views/pages/Page500')
const Login = () => import('../views/pages/Login')
const Register = () => import('../views/pages/Register')

// Users
const Users = () => import('../views/users/Users')
const User = () => import('../views/users/User')

// import Home from '../components/Home'
// import Register from '../components/Register'
// import Login from '../components/Login'
// import Songs from '../components/Songs/Index'
// import CreateSong from '../components/CreateSong'
// import ViewSong from '../components/ViewSong/Index'
// import EditSong from '../components/EditSong'
//import { homedir } from 'os';

Vue.use(Router)

function configRoutes() {
    return [
      {
        path: '/',
        redirect: '/dashboard',
        name: 'Home',
        component: DefaultContainer,
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard
          },
          {
            path: 'users',
            meta: { label: 'Users'},
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                component: Users,
              },
              {
                path: ':id',
                meta: { label: 'User Details'},
                name: 'User',
                component: User,
              },
            ]
          },
          {
            path: 'base',
            redirect: '/base/cards',
            name: 'Base',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: 'cards',
                name: 'Cards',
                component: Cards
              },
              {
                path: 'forms',
                name: 'Forms',
                component: Forms
              },
              {
                path: 'switches',
                name: 'Switches',
                component: Switches
              },
              {
                path: 'tables',
                name: 'Tables',
                component: Tables
              },
              {
                path: 'tabs',
                name: 'Tabs',
                component: Tabs
              },
              {
                path: 'breadcrumbs',
                name: 'Breadcrumbs',
                component: Breadcrumbs
              },
              {
                path: 'carousels',
                name: 'Carousels',
                component: Carousels
              },
              {
                path: 'collapses',
                name: 'Collapses',
                component: Collapses
              },
              {
                path: 'jumbotrons',
                name: 'Jumbotrons',
                component: Jumbotrons
              },
              {
                path: 'list-groups',
                name: 'List Groups',
                component: ListGroups
              },
              {
                path: 'navs',
                name: 'Navs',
                component: Navs
              },
              {
                path: 'navbars',
                name: 'Navbars',
                component: Navbars
              },
              {
                path: 'paginations',
                name: 'Paginations',
                component: Paginations
              },
              {
                path: 'popovers',
                name: 'Popovers',
                component: Popovers
              },
              {
                path: 'progress-bars',
                name: 'Progress Bars',
                component: ProgressBars
              },
              {
                path: 'tooltips',
                name: 'Tooltips',
                component: Tooltips
              }
            ]
          }
        ]
      },
      {
        path: '/pages',
        redirect: '/pages/404',
        name: 'Pages',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: '404',
            name: 'Page404',
            component: Page404
          },
          {
            path: '500',
            name: 'Page500',
            component: Page500
          },
          {
            path: 'login',
            name: 'Login',
            component: Login
          },
          {
            path: 'register',
            name: 'Register',
            component: Register
          }
        ]
      }
    ]
  }
  
  export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
  })

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home
//         },
//         {
//             path: '/register',
//             name: 'register',
//             component: Register
//         },
//         {
//             path: '/login',
//             name: 'login',
//             component: Login
//         },
//         {
//             path: '/songs',
//             name: 'songs',
//             component: Songs
//         },
//         {
//             path: '/songs/create',
//             name: 'songs-create',
//             component: CreateSong
//         },
//         {
//             path: '/songs/:songId',
//             name: 'song-detail',
//             component: ViewSong
//         },
//         {
//             path: '/songs/:songId/edit',
//             name: 'song-edit',
//             component: EditSong
//         }
//     ]
// })