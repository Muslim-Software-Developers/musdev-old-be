import Vue from 'vue'
import Router from 'vue-router'

//containers
const DefaultContainer = () => import('../containers/DefaultContainer')
const DefaultContainerFe = () => import('../containers/DefaultContainerFe')

/******************** User Frontend Components *****************/
const Home = () => import('../views/frontend/Home')
const About = () => import('../views/frontend/pages/About')
const Donnate = () => import('../views/frontend/pages/Support')
const Contact = () => import('../views/frontend/pages/Contact')
const Login = () => import('../views/frontend/auth/Login')
const Register = () => import('../views/frontend/auth/Register')
const ChangePassword = () => import('../views/frontend/auth/ChangePassword')
const ResetPassword = () => import('../views/frontend/auth/ResetPassword')
const ForgotPassword = () => import('../views/frontend/auth/ForgotPassword')
const UserFe = () => import('../views/frontend/user/User')
const UsersFe = () => import('../views/frontend/user/Users')
const UserSettings = () => import('../views/frontend/user/UserSettings')

/******************** Admin Frontend Components ****************/
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
        name: 'home',
        component: DefaultContainerFe,
        children: [
          {
            path: 'home',
            name: 'Frontend',
            component: Home
          },
          {
            path: '/home/about',
            meta: { label: 'About Us'},
            name: 'about',
            component: About
          },
          {
            path: '/home/members',
            name: 'members',
            meta: { label: 'Members'},
            component: UsersFe,
            children: [
              {
                path: ':id',
                meta: { label: 'Member Details'},
                name: 'Member',
                component: UserFe,
                children: [
                  {
                    path: 'settings',
                    meta: { label: 'Member Profile Settings' },
                    name: 'Member Profile Settings',
                    component: UserSettings
                  }
                ]
              },
            ]
          },
          {
            path: '/home/contact',
            meta: { label: 'Contact Us'},
            name: 'contact',
            component: Contact
          },
          {
            path: '/home/auth/signup',
            meta: { label: 'Join Us'},
            name: 'signup',
            component: Register
          },
          {
            path: '/home/auth/login',
            meta: { label: 'Login'},
            name: 'login',
            component: Login
          },
          {
            path: '/home/finance/donate',
            meta: { label: 'Donate'},
            name: 'donate',
            component: Donnate,
          },
          {
            path: '/home/forgot-password',
            meta: { label: 'Forgot Password'},
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                component: ForgotPassword,
              }
            ]
          },
          {
            path: '/home/reset-password',
            meta: { label: 'Reset Password'},
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                component: ResetPassword,
              }
            ]
          },
          {
            path: '/home/change-password',
            meta: { label: 'Change Password'},
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: '',
                component: ChangePassword,
              }
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