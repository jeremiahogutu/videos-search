import axios from 'axios'

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: GOOGLE_KEY
    }
})
