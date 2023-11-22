import axios from 'axios';
import ApiEndpoint from './config/api-endpoint';
import Utils from '../utils/utils';
import Config from './config/config';

const Auth = {
    async register({ name, email, password }) {
        return await axios.post(ApiEndpoint.REGISTER, { name, email, password });
    },

    async login({ email, password }) {
        return await axios.post(ApiEndpoint.LOGIN, { email, password });
    }
};

const Stories = {
    async getAll() {
        return await axios.get(ApiEndpoint.STORIES, {
            headers: {
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
            },
        });
    },

    async postStory({ description, photo }) {
        let data = { description, photo };
        let config = {
            headers: {
                'Content-Type':'multipart/form-data',
                Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
            },
        };
        return await axios.post(ApiEndpoint.STORIES, data, config);
    }
}

export { Auth, Stories };