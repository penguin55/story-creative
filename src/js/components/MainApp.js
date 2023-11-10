import {CustomLitElementWSD, html, css, msg} from './base/CustomLitElementWSD'

class MainApp extends CustomLitElementWSD {
    constructor(){
        super();
        this.initComponent();
    }

    initComponent(){
        let classes = "d-block container text-center pt-3";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }
}

customElements.define('main-app', MainApp);