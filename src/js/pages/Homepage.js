import {FetchData} from '../FetchData'

const Homepage = {
    async init() {
      await this._initialData();

    },
  
    async _initialData() {
        this._fetchData();
        let nav = document.querySelector('nav-links');
        nav.activeNav = "home";
    },

    _fetchData(){
        let dataRaw = FetchData.get('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
        dataRaw.then((dataJSON) => {
            this._populateData(dataJSON)
        }).catch((er)=> { console.log(er); });
    },

    _populateData(data){
        let cardList = document.querySelector('card-list');
        cardList.data = data;
    }
  };
  
  export default Homepage;