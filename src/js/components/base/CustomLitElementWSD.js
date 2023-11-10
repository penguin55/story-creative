import {CustomLitElement, html, css, msg} from './CustomLitElement';

class CustomLitElementWSD extends CustomLitElement {
    createRenderRoot() {
        return this;
    }
}

export {CustomLitElementWSD, html, css, msg};