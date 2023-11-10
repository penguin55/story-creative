import {CustomLitElementWSD, html} from '../base/CustomLitElementWSD'

class FloatingHome extends CustomLitElementWSD {
    constructor(){
        super();
    }

    render() {
        return html`
            <div class="rounded-circle">
                <a href="#"><i class="fa-solid fa-arrow-up-long"></i></a>
            </div>
        `;
    }
}

customElements.define('floating-home', FloatingHome);