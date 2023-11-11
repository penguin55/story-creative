import {CustomLitElementWSD, html, css, msg} from './base/CustomLitElementWSD'

class HeaderApp extends CustomLitElementWSD {
    constructor() {
        super();
        this.initComponent();
    }

    initComponent(){
        let classes = "p-5 d-flex";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html`
            <section class="d-flex align-self-center"><img class="app-logo" src="./img/Creative-Social-Logo.png" alt="Creative Social Logo"></section>
            <nav-links>
                <locale-picker slot='locale-picker'></locale-picker>
            </nav-links>`;
    }
}

customElements.define('header-app', HeaderApp);