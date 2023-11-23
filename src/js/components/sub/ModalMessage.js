import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'

class ModalMessage extends CustomLitElementWSD {
    static properties = {
        message: { type: String },
        modalId: { type: String },
        modalType: { type: String } 
    }

    constructor() {
        super();
        this.initComponent();
    }

    initComponent() {
        let classes = "d-flex position-absolute";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html`
        <div class="modal fade" id="${this.modalId}" tabindex="-1" role="dialog" aria-labelledby="${this.modalId}Title" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <section class="d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-triangle-exclamation${this.modalType == "error" ? "" : " d-none"}" style="color: #fb2828;"></i>
                        <i class="fa-solid fa-circle-exclamation${this.modalType == "warn" ? "" : " d-none"}" style="color: #ffd500;"></i>
                        <section class="p-1"> ${this.message} </section>
                    </section>
                </div>
            </div>
            </div>
        </div>
        `;
    }
}

customElements.define('modal-message', ModalMessage);