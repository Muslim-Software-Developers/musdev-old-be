import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import Register from '../components/Register'
// import Login from '../components/Login'
// import Songs from '../components/Songs/Index'
// import CreateSong from '../components/CreateSong'
// import ViewSong from '../components/ViewSong/Index'
// import EditSong from '../components/EditSong'
import { homedir } from 'os';

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: Register
        // },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login
        // },
        // {
        //     path: '/songs',
        //     name: 'songs',
        //     component: Songs
        // },
        // {
        //     path: '/songs/create',
        //     name: 'songs-create',
        //     component: CreateSong
        // },
        // {
        //     path: '/songs/:songId',
        //     name: 'song-detail',
        //     component: ViewSong
        // },
        // {
        //     path: '/songs/:songId/edit',
        //     name: 'song-edit',
        //     component: EditSong
        // }
    ]
})