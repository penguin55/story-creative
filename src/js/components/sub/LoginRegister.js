import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'

class LoginRegister extends CustomLitElementWSD {
    static properties = {
        formType: { type: String }
    }

    constructor() {
        super();
        this.initComponent();
    }

    initComponent() {
        let classes = "d-flex w-100";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        switch (this.formType) {
            case 'register':
                return this.register();
            case 'login':
                return this.login();
        }
    }

    login() {
        return html`
        <div class="m-auto container py-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                    <h1 class="mb-3 mt-3 text-center" id="login-header">${msg("Masuk")}</h1>

                    <form class="pb-3 pt-3" id="loginForm" novalidate>
                        <input-validation label="${msg("Email")}" type="text" inputId="validationEmail" invalidFeedbackMessage="Wajib diisi" required></input-validation>
                        <input-validation label="${msg("Password")}" type="password" inputId="validationPassword" invalidFeedbackMessage="Wajib diisi" required></input-validation>

                        <div class="col-12 text-end">
                            <button class="btn btn-general" type="submit" id="submit-button">
                                <section id="spinner" class="visually-hidden">
                                    <div class="spinner-grow spinner-grow-sm text-secondary" role="status"> </div>
                                    <div class="spinner-grow spinner-grow-sm text-secondary" role="status"> </div>
                                    <div class="spinner-grow spinner-grow-sm text-secondary" role="status"> </div>
                                </section>
                                <section id="button-text">${msg("Masuk")}</section>
                            </button>
                        </div>
                    </form>

                    <div class="mt-4 text-center" id="register-button">
                        ${msg(html`Belum punya akun? <a href="/register.html">Daftar</a>`)}
                    </div>
                </div>
            </div>
        </div>
        <modal-message modalId="login-modal"></modal-message>
        `;
    }

    register() {
        return html`
        <div class="m-auto container py-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                    <h1 class="mb-3 mt-3 text-center">${msg("Daftar")}</h1>

                    <form class="pb-3 pt-3" id="registerForm" novalidate>
                        <input-validation label="${msg("Nama")}" type="text" inputId="validationCustomRecordName" invalidFeedbackMessage="Wajib Diisi" required></input-validation>
                        <input-validation label="${msg("Email")}" type="email" inputId="validationCustomEmail" invalidFeedbackMessage="Wajib Diisi" required></input-validation>
                        <input-validation label="${msg("Kata Sandi")}" type="password" inputId="validationCustomPassword" invalidFeedbackMessage="Wajib Diisi" required></input-validation>
                        <input-validation label="${msg("Konfirmasi Kata Sandi")}" type="password" inputId="validationConfirmationPassword" invalidFeedbackMessage="Wajib Diisi" required></input-validation>

                        <div class="col-12 text-end">
                            <button class="btn btn-general" type="submit" id="submit-button">
                                <section id="spinner" class="visually-hidden">
                                    <div class="spinner-grow spinner-grow-sm text-secondary" role="status"> </div>
                                    <div class="spinner-grow spinner-grow-sm text-secondary" role="status"> </div>
                                    <div class="spinner-grow spinner-grow-sm text-secondary" role="status"> </div>
                                </section>
                                <section id="button-text">${msg("Daftar")}</section>
                            </button>
                        </div>
                    </form>

                    <div class="mt-4 text-center">
                        ${msg(html`Sudah punya akun? <a href="/login.html">Masuk</a>`)}
                    </div>
                </div>
            </div>
        </div>
        <modal-message modalId="register-modal"></modal-message>
        `;
    }
}

customElements.define('login-register', LoginRegister);