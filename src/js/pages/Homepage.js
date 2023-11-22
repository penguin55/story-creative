import { Stories } from "../network/connection";
import CheckUserAuth from './auth/CheckUserAuth';

const Homepage = {
    async init() {
        CheckUserAuth.checkLoginState();
        await this._initialData();
    },

    async _initialData() {
        this._fetchData();
        let nav = document.querySelector('nav-links');
        nav.activeNav = "home";
    },

    async _fetchData() {
        let response = await Stories.getAll();
        let data = response.data;
        this._populateData(data.listStory);
    },

    _populateData(data) {
        let cardList = document.querySelector('card-list');
        cardList.data = data;
    }
};

export default Homepage;