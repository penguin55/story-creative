import {CustomLitElement, html, css, msg, nothing, updateWhenLocaleChanges} from './CustomLitElement';

class CustomLitElementWSD extends CustomLitElement {
    createRenderRoot() {
        return this;
    }
}

export {CustomLitElementWSD, html, css, msg, nothing};