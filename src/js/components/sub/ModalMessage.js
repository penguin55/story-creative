import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'

class ModalMessage extends CustomLitElementWSD {
    static properties = {
        message: { type: String },
        show: { type: Boolean }
    }

    constructor() {
        super();
        this.initComponent();
    }

    initComponent() {
        let classes = "d-flex vw-100 vh-100 absolute";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html``;
    }
}

customElements.define('modal-message', ModalMessage);