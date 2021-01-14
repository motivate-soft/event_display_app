import EventDisplay from './Components/EventDisplay/EventDisplay';
import ProfileDetail from './Components/EventDisplay/ProfileDetail';

const routes = [
    { path: '/', name: 'Event', component: EventDisplay },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileDetail
    }
];

export default routes;
