import axios from 'axios'

const KEY = 'AIzaSyDCSh2CbbMcyfpHpAQvm6zLCgPFHBhIKMk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
