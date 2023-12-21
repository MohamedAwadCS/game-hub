import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4327be93815c4b0fb5a59b9d14492277'
    }
})