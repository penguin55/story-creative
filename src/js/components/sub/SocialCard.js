import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'
import {PostDate} from '../../post-date'
import 'bootstrap';

class SocialCard extends CustomLitElementWSD {
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

    initComponent(){
        let classes = "card d-block bg-white mb-4 rounded-4 shadow";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html` 
            <section class="card-head d-flex p-4 gap-3">
                <img class="rounded-circle" src="https://ui-avatars.com/api/?name=${this.statusData.name.split(" ").join("+")}" alt="${this.statusData.name}">
                <section class="align-self-center">
                    <h5>${this.statusData.name}</h5> 
                    <p class="card-text"><small class="text-muted">${PostDate.reformatPostDate(this.statusData.createdAt)}</small></p>
                </section>
            </section>
            <img class="image-post" style="width:100%;" src="${this.statusData.photoUrl}" alt="${this.statusData.name}">
            <section class="card-body p-4">
                <p class="card-text">${this.statusData.description}</p>
            </section>
            <section class="card-footer p-4 d-flex gap-4">
                <a href="#"><i class="fa-solid fa-heart fa-2xl text-danger"></i></a>
                <a href="#"><i class="fa-solid fa-comment-dots fa-2xl text-comment"></i></a>
                <a href="#"><i class="fa-solid fa-share-nodes fa-2xl text-share"></i></a>
            </section>
        `;
    }
}

customElements.define('social-card', SocialCard);