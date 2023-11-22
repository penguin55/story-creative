import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'
import { Stories } from '../../network/connection';
import Utils from '../../utils/utils';
import Config from '../../network/config/config';

class StoryForm extends CustomLitElementWSD {
    constructor() {
        super();
        this.initComponent();

        this.username = Utils.getUserToken(Config.USER_NAME_KEY);
    }

    initComponent() {
        let classes = "card d-block bg-white rounded-4 shadow p-0 col-lg-6 text-start";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html` 
        <form id="form-status" @submit="${this.onFormSubmit}" class="card d-block bg-white rounded-4 shadow p-0 text-start needs-validation" novalidate>
            <section id="card-preview" class="d-none">
            </section>
            <section class="card-head d-flex p-4 gap-3">
                <img class="rounded-circle" src="https://ui-avatars.com/api/?name=${this.username.split(" ").join("+")}" alt="Ari Utomo">
                <textarea id="description" placeholder="${msg('Ada cerita apa hari ini?')}" class="form-control" required></textarea>
            </section>
            <section class="card-line"></section>
            <section class="card-body">
                <section class="upload">
                    <input @change="${this.onUpload}" class="d-none" id="input-file" class ="upload-file" type="file"/>
                    <label id="upload-image" for="input-file"><i class="fa-regular fa-image"></i> ${msg("Unggah Gambar")}</label>
                </section>
            </section>
            <section class="card-line"></section>
            <section class="card-foot">
                <button type="submit" class="btn btn-general">${msg('Unggah Postingan')}</button>
            </section>
        </form>
        `;
    }

    onUpload() {
        let preview = this.querySelector("#card-preview");
        let imageInput = this.querySelector('#input-file');

        const photo = imageInput.files[0];
        if (!photo) return;


        const reader = new FileReader();
        reader.onload = (event) => {
            preview.classList.remove('d-none');
            preview.style.backgroundImage = `url('${event.target.result}')`;
        };

        reader.readAsDataURL(photo);
    }

    async onFormSubmit(event) {
        var form = document.querySelector('#form-status');
        var formData = this._getFormData();

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
        event.preventDefault();

        let response = await Stories.postStory({...formData});
        console.log(response);
    }

    _getFormData() {
        let file = this.querySelector('#input-file');
        let description = this.querySelector('#description');

        return {
            description: description.value,
            photo: file.files[0],
        };
    }
}

customElements.define('story-form', StoryForm);