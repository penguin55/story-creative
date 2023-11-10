import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'

class ModalCard extends CustomLitElementWSD {
    static properties = {
        title: { type: String, reflect: true },
    }

    constructor() {
        super();
        this.initComponent();
        this.title = msg("Tambah Status");
    }

    initComponent() {
        let classes = "modal fade";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html` 
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <form class="card d-block bg-white rounded-4 shadow p-0 text-start">
                    <section id="card-preview" class="d-none">
                    </section>
                    <section class="card-head d-flex p-4 gap-3">
                        <img class="rounded-circle" src="https://ui-avatars.com/api/?name=Ari+Utomo" alt="Ari Utomo">
                        <textarea placeholder="Ada cerita apa hari ini?" class="form-control"></textarea>
                    </section>
                    <section class="card-line"></section>
                    <section class="card-body">
                        <section class="upload">
                            <input @change="${this.onUpload}" class="d-none" id="input-file-modal" class ="upload-file" type="file"/>
                            <label id="upload-image" for="input-file-modal"><i class="fa-regular fa-image"></i> ${msg("Unggah Gambar")}</label>
                        </section>
                    </section>
                    <section class="card-line"></section>
                    <section class="card-foot">
                        <button class="btn btn-upload">${msg('Unggah Postingan')}</button>
                    </section>
                </form>
            </div>
        </div>
        `;
    }

    onUpload(){
        let preview = this.querySelector("#card-preview");
        let imageInput = this.querySelector('#input-file-modal');
        
        const photo = imageInput.files[0];
        if (!photo) return;


        const reader = new FileReader();
        reader.onload = (event) => {
            preview.classList.remove('d-none');
            preview.style.backgroundImage = `url('${event.target.result}')`;
        };

        reader.readAsDataURL(photo);
    }
}

customElements.define('modal-card', ModalCard);