import { CustomLitElementWSD, html, css, msg, nothing } from '../base/CustomLitElementWSD'

class InputValidation extends CustomLitElementWSD {
    static properties = {
        label: {type: String, reflect: true},
        type: { type: String, reflect: true },
        value: { type: String, reflect: true },
        inputId: { type: String, reflect: true },

        validFeedbackMessage: { type: String, reflect: true },
        invalidFeedbackMessage: { type: String, reflect: true },

        required: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.initComponent();
        this._checkAvailabilityProperty();

        this.type = 'text';
        this.required = false;
    }

    initComponent(){
        let classes = "d-block form-floating mb-3";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    _checkAvailabilityProperty() {
        if (!this.hasAttribute('invalidFeedbackMessage')) {
            throw new Error(
                `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
            );
        }
    }

    render() {
        return html`
            <input
                id=${this.inputId || nothing}
                class="form-control"
                type=${this.type}
                value=${this.value || nothing}
                ?required=${this.required}
                @input=${(e) => (this.value = e.target.value)}
                placeholder=""/>
            <label for="${this.inputId || nothing}">${this.label}</label>
            ${this._validFeedbackTemplate()}
            <div class="ms-2 invalid-feedback">${this.invalidFeedbackMessage}</div>
            <span id="feedback-${this.inputId || nothing}" class="d-none text-danger"></span>
    `;
    }

    _validFeedbackTemplate() {
        if (this.validFeedbackMessage) {
            return html` <div class="valid-feedback ms-2">Test${this.validFeedbackMessage}</div> `;
        }

        return html``;
    }
}

customElements.define('input-validation', InputValidation);