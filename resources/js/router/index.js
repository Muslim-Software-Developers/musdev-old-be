import Vue from 'vue'
import Router from 'vue-router'

//containers
const DefaultContainer = () => import('../containers/DefaultContainer')
//Views
const Dashboard = () => import('../views/Dashboard')

// Users
const Users = () => import('../views/users/Users')
const User = () => import('../views/users/User')

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