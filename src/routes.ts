import EventDisplay from './Components/EventDisplay/EventDisplay';
import ProfileDetail from './Components/Profile/ProfileDetail';

const routes = [
    { path: '/', name: 'Event', component: EventDisplay },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfileDetail
    }
];

export default routes;
