// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';
import './scroll';

//  Import Components
import './components'

// Import Pages
import Homepage from './pages/Homepage'

const routes = {
    '/': Homepage,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
    const route = detectRoute();
    route.init();
});