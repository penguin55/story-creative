import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class CustomLitElement extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }
}

export {CustomLitElement, html, css, msg};