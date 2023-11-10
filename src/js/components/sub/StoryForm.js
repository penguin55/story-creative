import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'

class StoryForm extends CustomLitElementWSD {
    static properties = {
        statusData: {
            type: Object,
            attribute: "status-data",
        },
    }

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
            <form>
                <section class="card-head d-flex p-4 gap-3">
                    <img class="rounded-circle" src="https://ui-avatars.com/api/?name=Ari+Utomo" alt="Ari Utomo">
                    <textarea readonly placeholder="Ada cerita apa hari ini?" class="form-control"></textarea>
                </section>
                <section class="card-line"></section>
                <section class="card-body">
                    <section class="upload">
                        <input disabled class="d-none" id="input-file" class ="upload-file" type="file"/>
                        <label id="upload-image" for="input-file"><i class="fa-regular fa-image"></i> ${msg("Unggah Gambar")}</label>
                    </section>
                </section>
            </form>
        `;
    }
}

customElements.define('story-form', StoryForm);