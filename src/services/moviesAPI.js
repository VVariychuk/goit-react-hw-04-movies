import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
// const KEY = '1a7532c831c19ca759402dbd11644ca2';

const moviesAPI = {
    getImage({ query, page, perPage }) {
        return axios
            .get(
            `/?q=${query}&key=1a7532c831c19ca759402dbd11644ca2&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}`
            ).then(response => response.data.hits)
    }
};

export default moviesAPI;