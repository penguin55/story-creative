import {FetchData} from '../FetchData'

const AddStory = {
    async init() {
      await this._initialData();

    },
  
    async _initialData() {
        let nav = document.querySelector('nav-links');
        nav.activeNav = "add_story";
    },
  };
  
export default AddStory;