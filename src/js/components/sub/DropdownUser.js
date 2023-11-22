import { CustomLitElementWSD, html, css, msg } from '../base/CustomLitElementWSD'
import Utils from '../../utils/utils';
import Config from '../../network/config/config';
import CheckUserAuth from '../../pages/auth/CheckUserAuth';

class DropdownUser extends CustomLitElementWSD {
    constructor() {
        super();
        this.initComponent();

        this.username = Utils.getUserToken(Config.USER_NAME_KEY);
    }

    initComponent(){
        let classes = "d-none";
        classes.split(" ").forEach((classSplit) => this.classList.add(classSplit));
    }

    render() {
        return html`
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-nowrap p-0" href="#" role="button" data-bs-toggle="dropdown">
                    <div class="d-inline-block">
                        <img id="imgUserLogged" style="width: 70%; height: 70%" class="img-fluid rounded-pill"
                        src="https://ui-avatars.com/api/?name=${this.username.split(" ").join("+")}&background=fad02c" alt="${this.username}"/>
                    </div>
                </a>
                <ul class="dropdown-menu">
                    <div class="d-block p-2">
                        <img id="imgUserLogged" style="width: 25%; height: 25%" class="img-fluid rounded-pill"
                        src="https://ui-avatars.com/api/?name=${this.username.split(" ").join("+")}&background=fad02c" alt="${this.username}"/>
                        <span class="p-1">${this.username}</span>
                    </div>
                    <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}>
                        ${msg(`Keluar`)}
                    </a>
                </ul>
            </li>
        `;
    }

    _userLogOut(event) {
        event.preventDefault();
        Utils.destroyUserToken(Config.USER_TOKEN_KEY);
        CheckUserAuth.checkLoginState();
    }
}

customElements.define('dropdown-user', DropdownUser);