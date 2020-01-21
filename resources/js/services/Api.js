import axios from 'axios'

//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default () => {
    return axios.create({
        baseURL: `http://localhost:8000/api`
    })
}