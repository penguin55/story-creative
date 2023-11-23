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
        let classes = "d-flex ms-auto gap-5";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        console.log(this.activeNav);
        return html`
            <slot name="locale-picker"/>
            <nav id='nav'>
                <ul class="nav nav-pills">
                    <li class="nav-item"><a class="nav-link ${this.activeNav == "home" ? "active" : ""}" href="/">${msg(`Halaman Utama`)}</a></li>
                    <li class="nav-item"><a class="nav-link ${this.activeNav == "add_story" ? "active" : ""}" href="/addStory.html">${msg(`Tambah Cerita`)}</a></li>
                    <dropdown-user id="userDropdown"></dropdown-user>
                    <li id="loginMenu" class="nav-item"><a class="nav-link ${this.activeNav == "auth" ? "active" : ""}" href="#">${msg(`Masuk`)}</a></li>
                </ul>
            </nav>
    `;
    }
}

customElements.define('nav-links', NavLinks);