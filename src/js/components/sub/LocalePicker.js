import { CustomLitElement, html, css } from '../base/CustomLitElement'
import { allLocales } from '../../../generated/locale-codes';
import { getLocale, getLocaleLang, setLocaleLang } from '../../localization.js';

class LocalePicker extends CustomLitElement {
    static properties = {
        lang: { type: String }
    }

    static styles = css`
        :host{
            height: 70%;
            display: flex;
            margin-block: auto;
        }

        button {
            cursor: pointer;
            position: relative;
            border-radius: 50px;
            border-style: none;
            width: 80px;
            background-color: #e9eaec;
        }

        .value {
            display: flex;
            justify-content: space-between;
            padding-inline: 8px;
            font-weight: bold;
        }

        .value span {
            width: 20px;
        }

        .toggle-button {
            border-radius: 50px;
            position: absolute;
            width: 55%;
            height: 100%;
            top:0%;
            left:100%;
            background-color: #90adc6;
            transition: ease 0.5s;
            transform: translateX(-100%);
        }

        .active {
            left:0% !important;
            transform: translateX(0%) !important;
        }
    `;
    constructor() {
        super();

        this.lang = getLocaleLang();
        if (this.lang !== getLocale()) {
            setLocaleLang(this.lang);
        }      
    }

    render() {
        return html`
        <button type="button" @click='${this._localeChanged}'>
            <section class="value">
                <span>EN</span>
                <span>ID</span>
            </section>
            <section class="toggle-button${this.lang == 'id' ? " active" : ""}"></section>
        </button>
    `;
    }

    _localeChanged(event) {
        let activeLang = this.lang;

        this.lang = activeLang == 'id' ? 'en' : 'id';

        if (this.lang !== getLocale()) {
            setLocaleLang(this.lang);
        }
    }
}

customElements.define('locale-picker', LocalePicker);