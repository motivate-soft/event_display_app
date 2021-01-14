interface ProfileInterface {
    id: string;
    role: string;
    name: string;
    avatar: string;
    job: string;
    description: string;
    link: string;
}

class Profile {
    id: string;
    role: string;
    name: string;
    avatar: string;
    job: string;
    description: string;
    link: string;

    constructor(incoming: ProfileInterface) {
        Object.assign(this, incoming);
    }
}

export { Profile as default, ProfileInterface };
