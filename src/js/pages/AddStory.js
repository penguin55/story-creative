import CheckUserAuth from './auth/CheckUserAuth';

const AddStory = {
    async init() {
      CheckUserAuth.checkLoginState();
      await this._initialData();
    },
  
    async _initialData() {
        let nav = document.querySelector('nav-links');
        nav.activeNav = "add_story";
    },
  };
  
export default AddStory;