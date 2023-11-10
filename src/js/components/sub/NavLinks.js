import {CustomLitElementWSD, html, css, msg} from '../base/CustomLitElementWSD'

class NavLinks extends CustomLitElementWSD {
    static properties = {
        activeNav: { type: String }
    }

    constructor() {
        super();
        this.initComponent();
    }

    initComponent(){
        let classes = "d-block ms-auto";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html`
            <nav>
                <ul class="nav nav-pills">
                    <li class="nav-item"><a class="nav-link ${this.activeNav == "home" ? "active" : ""}" href="/">${msg(`Halaman Utama`)}</a></li>
                    <li class="nav-item"><a class="nav-link ${this.activeNav == "profile" ? "active" : ""}" href="#">${msg(`Profil`)}</a></li>
                    <li class="nav-item"><a class="nav-link ${this.activeNav == "logout" ? "active" : ""}" href="#">${msg(`Keluar`)}</a></li>
                </ul>
            </nav>
    `;
    }
}

customElements.define('nav-links', NavLinks);