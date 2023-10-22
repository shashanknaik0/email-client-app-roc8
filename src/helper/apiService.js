import axios from 'axios';

const emailAPI = "https://flipkart-email-mock.vercel.app/"

export default {
    getAll: async () => {
        return axios(emailAPI);
    }
}