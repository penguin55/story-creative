import { CustomLitElement, html, css } from '../base/CustomLitElement'
import { allLocales } from '../../../generated/locale-codes';
import { getLocale, localeNames, setLocaleLang } from '../../localization.js';

class LocalePicker extends CustomLitElement {

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
            left:0%;
            background-color: #90adc6;
            transition: ease 0.5s;
        }
    `;
    constructor() {
        super();
    }

    render() {
        return html`
        <button type="button" @click='${this._localeChanged}'>
            <section class="value">
                <span>EN</span>
                <span>ID</span>
            </section>
            <section class="toggle-button"></section>
        </button>
    `;
    }

    _localeChanged(event) {
        let toggleButton = this.shadowRoot.querySelector(".toggle-button");
        let active = toggleButton.classList.contains('active');
        if (active) {
            toggleButton.classList.remove('active');
        } else {
            toggleButton.classList.add('active');
        }
        toggleButton.style.left = !active ? '100%' : '0%';
        toggleButton.style.transform = active ? 'translateX(0%)':'translateX(-100%)';

        const newLocale = active ? 'id' : 'en';

        if (newLocale !== getLocale()) {
            setLocaleLang(newLocale);
        }
    }
}

customElements.define('locale-picker', LocalePicker);