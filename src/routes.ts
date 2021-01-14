import Event from './Components/EventDisplay/Event';
import ProfileDetail from './Components/EventDisplay/ProfileDetail';

const routes = [
    { path: '/', name: 'Event', component: Event },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileDetail
    }
];

export default routes;
