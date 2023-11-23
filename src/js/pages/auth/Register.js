import { Auth } from "../../network/connection";
import CheckUserAuth from "./CheckUserAuth";

import * as bootstrap from 'bootstrap';

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
        const passwordField = document.querySelector('#validationCustomPassword');
        const passwordConfirmationField = document.querySelector('#validationConfirmationPassword');
        const feedbackField = document.querySelector('#feedback-validationCustomPassword');
        const feedbackConfirmationField = document.querySelector('#feedback-validationConfirmationPassword');
        const popupModal = document.querySelector('#register-modal');

        const registerModal = new bootstrap.Modal(popupModal, {});

        registerForm.addEventListener(
            'submit',
            async (event) => {
                event.preventDefault();
                event.stopPropagation();


                registerForm.classList.add('was-validated');
                if (passwordField.value == passwordConfirmationField.value && passwordField.value.length >= 8)
                    await this._getRegistered();
                else {
                    popupModal.parentElement.modalType = 'warn';
                    popupModal.parentElement.message = "Cek kembali password, minimal 8 karakter.";

                    registerModal.show();
                }
            },
            false,
        );

        passwordField.addEventListener('input', (event) => {
            let inputNode = event.target;
            
            if (inputNode.value.length < 8) {
                if (feedbackField.classList.contains('d-none')) feedbackField.classList.remove('d-none');
                feedbackField.innerHTML = "Password minimal 8 karakter.";
            } else {
                if (!feedbackField.classList.contains('d-none')) feedbackField.classList.add('d-none');
                feedbackField.innerHTML = '';
            }

        });

        passwordConfirmationField.addEventListener('input', (event) => {
            let inputNode = event.target;
            
            if (inputNode.value != passwordField.value) {
                if (feedbackConfirmationField.classList.contains('d-none')) feedbackConfirmationField.classList.remove('d-none');
                feedbackConfirmationField.innerHTML = "Password tidak sama.";
            } else {
                if (!feedbackConfirmationField.classList.contains('d-none')) feedbackConfirmationField.classList.add('d-none');
                feedbackConfirmationField.innerHTML = '';
            }

        });
    },

    async _getRegistered() {
        const formData = this._getFormData();
        const submitButton = document.querySelector('#submit-button');
        const spinner = document.querySelector('#spinner');
        const buttonText = document.querySelector('#button-text');
        const popupModal = document.querySelector('#register-modal');

        const registerModal = new bootstrap.Modal(popupModal, {});

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
                popupModal.parentElement.modalType = 'warn';
                popupModal.parentElement.message = error.response.data.message;

                registerModal.show();

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