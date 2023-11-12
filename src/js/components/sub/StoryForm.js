import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'

class StoryForm extends CustomLitElementWSD {
    constructor() {
        super();
        this.initComponent();
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
                <img class="rounded-circle" src="https://ui-avatars.com/api/?name=Ari+Utomo" alt="Ari Utomo">
                <textarea placeholder="${msg('Ada cerita apa hari ini?')}" class="form-control" required></textarea>
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
                <button type="submit" class="btn btn-upload">${msg('Unggah Postingan')}</button>
            </section>
        </form>
        `;
    }

    onUpload(){
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

    onFormSubmit (event) {
        var form = document.querySelector('#form-status');

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }
}

customElements.define('story-form', StoryForm);