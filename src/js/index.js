// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import './scroll';

//  Import Components
import './components'

// Import Pages
import Homepage from './pages/Homepage'
import AddStory from './pages/AddStory'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const routes = {
    '/': Homepage,
    '/addStory.html': AddStory,
    '/login.html': Login,
    '/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
    const route = detectRoute();
    route.init();
});