import axios from "axios"

const KEY = 'AIzaSyBUuDTnETA3wG-FYVVpf4aE4mj04qG2Y3U'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})