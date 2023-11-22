import { Auth } from "../../network/connection";
import CheckUserAuth from "./CheckUserAuth";
import Utils from "../../utils/utils";
import Config from "../../network/config/config";

const Login = {
    async init() {
        CheckUserAuth.checkLoginState();
        this._initialListener();
        await this._initialData();
    },

    async _initialData() {
        let nav = document.querySelector('nav-links');
        nav.activeNav = "auth";
    },

    _initialListener() {
        const loginForm = document.querySelector('#loginForm');

        loginForm.addEventListener(
            'submit',
            async (event) => {
                event.preventDefault();
                event.stopPropagation();

                loginForm.classList.add('was-validated');
                await this._getLogged();
            },
            false,
        );
    },

    async _getLogged() {
        const formData = this._getFormData();
        const submitButton = document.querySelector('#submit-button');
        const spinner = document.querySelector('#spinner');
        const buttonText = document.querySelector('#button-text');

        submitButton.setAttribute('disabled', true);
        spinner.classList.remove('visually-hidden');
        buttonText.classList.add('visually-hidden');

        if (this._validateFormData({ ...formData })) {
            try {
                const response = await Auth.login({
                    email: formData.email,
                    password: formData.password,
                });

                Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
                Utils.setUserToken(Config.USER_NAME_KEY, response.data.loginResult.name);
                
                this._goToDashboardPage();
            } catch (error) {
                console.error(error);
                submitButton.removeAttribute('disabled');
                spinner.classList.add('visually-hidden');
                buttonText.classList.remove('visually-hidden');
            }
        } else {
            submitButton.removeAttribute('disabled');
            spinner.classList.add('visually-hidden');
            buttonText.classList.remove('visually-hidden');
        }
    },

    _getFormData() {
        const email = document.querySelector('#validationEmail');
        const password = document.querySelector('#validationPassword');

        return {
            email: email.value,
            password: password.value,
        };
    },

    _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');

        return formDataFiltered.length === 0;
    },

    _goToDashboardPage() {
        window.location.href = '/';
    },
};

export default Login;