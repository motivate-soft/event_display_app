import Event from './components/EventDisplay/Event';
import Profile from './components/EventDisplay/Profile';

const routes = [
    { path: '/', name: 'Event', component: Event },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
];

export default routes;
