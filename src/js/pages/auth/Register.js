import { Auth } from "../../network/connection";
import CheckUserAuth from "./CheckUserAuth";

const Register = {
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
        const registerForm = document.querySelector('#registerForm');
        registerForm.addEventListener(
            'submit',
            async (event) => {
                event.preventDefault();
                event.stopPropagation();


                registerForm.classList.add('was-validated');
                await this._getRegistered();
            },
            false,
        );
    },

    async _getRegistered() {
        const formData = this._getFormData();
        const submitButton = document.querySelector('#submit-button');
        const spinner = document.querySelector('#spinner');
        const buttonText = document.querySelector('#button-text');

        submitButton.setAttribute('disabled', true);
        spinner.classList.remove('visually-hidden');
        buttonText.classList.add('visually-hidden');

        if (this._validateFormData({ ...formData })) {
            console.log('formData');
            console.log(formData);

            try {
                const response = await Auth.register({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                });
                this._goToLoginPage();
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
        const name = document.querySelector('#validationCustomRecordName');
        const email = document.querySelector('#validationCustomEmail');
        const password = document.querySelector('#validationCustomPassword');

        return {
            name: name.value,
            email: email.value,
            password: password.value,
        };
    },

    _validateFormData(formData) {
        const formDataFiltered = Object.values(formData).filter((item) => item === '');

        return formDataFiltered.length === 0;
    },

    _goToLoginPage() {
        window.location.href = '/login.html'
    }
};

export default Register;