import {CustomLitElement, html, css, msg} from './base/CustomLitElement'

class FooterApp extends CustomLitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <p class="footer-text">
                ${msg(`Dibuat oleh AF Creative`)}
            </p>
    `;
    }
}

customElements.define('footer-app', FooterApp);