import {CustomLitElementWSD, html, css, msg} from '../base/CustomLitElementWSD'

class CardList extends CustomLitElementWSD {
    static properties = {
        data: { type: Object }
    }

    constructor(){
        super();
        this.initComponent();
    }

    initComponent(){
        let classes = "d-block col-lg-6 text-start";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        console.log(this.data);
        if (this.data) {
            return html `${this.data.listStory.map((item) => {
                return html`<social-card status-data="${JSON.stringify(item)}"></social-card>`;
            })}`;
        } else {
            return html`<p class='text-center'>NO DATA FOUND</p>`;
        }
    }
}

customElements.define('card-list', CardList);