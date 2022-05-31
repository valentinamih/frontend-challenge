import axios from 'axios'

export const catsAPI = {
    requestCat: () => {
        return axios.get('https://api.thecatapi.com/v1/images/search?limit=20&api_key=05e95a73-1615-46d8-844e-d3cb665532df')
    },

}