import Vue from 'vue'
import Router from 'vue-router'

//containers
const DefaultContainer = () => import('../containers/DefaultContainer')
const DefaultContainerFe = () => import('../containers/DefaultContainerFe')
//Views
const Dashboard = () => import('../views/admin/Dashboard')

// Users
const Users = () => import('../views/admin/users/Users')
const User = () => import('../views/admin/users/User')

//Feedbacks
const Feedbacks = () => import('../views/admin/feedbacks/Feedbacks')
const Feedback = () => import('../views/admin/feedbacks/Feedback')

//import { homedir } from 'os';

Vue.use(Router)

function configRoutes() {
    return [
      {
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: DefaultContainerFe,
        children: [
          {
            path: 'home',
            name: 'Frontend',
            component: Dashboard
          },
          {
            path: '/home/users',
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
            path: '/home/feedbacks',
            meta: { label: 'Feedbacks'},
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                component: Feedbacks,
              },
              {
                path: ':id',
                meta: { label: 'Feedback Details'},
                name: 'Feedback',
                component: Feedback,
              },
            ]
          }
        ],
      },
      {
        path: '/admin/',
        redirect: '/admin/dashboard',
        name: 'AdminHome',
        component: DefaultContainer,
        children: [
          {
            path: 'dashboard',
            name: 'Dashboard',
            component: Dashboard
          },
          {
            path: '/admin/users',
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
            path: '/admin/feedbacks',
            meta: { label: 'Feedbacks'},
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                component: Feedbacks,
              },
              {
                path: ':id',
                meta: { label: 'Feedback Details'},
                name: 'Feedback',
                component: Feedback,
              },
            ]
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