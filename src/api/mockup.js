export const contents = [
    {
        id: 1,
        image: '/images/demo1.jpg',
        type: 'event',
        title: 'Lorem Ipsum Dolor',
        text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        id: 1,
        image: '/images/demo2.jpg',
        type: 'article',
        title: 'Lorem Ipsum Dolor',
        text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        id: 1,
        image: '/images/demo3.jpg',
        type: 'event',
        title: 'Lorem Ipsum Dolor',
        text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        id: 1,
        image: '/images/demo2.jpg',
        type: 'event',
        title: 'Lorem Ipsum Dolor',
        text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        id: 1,
        image: '/images/demo1.jpg',
        type: 'speaker',
        title: 'Lorem Ipsum Dolor',
        text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    },
    {
        id: 1,
        image: '/images/demo2.jpg',
        type: 'article',
        title: 'Lorem Ipsum Dolor',
        text:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
    }
];

export const typeOptions = [
    { value: 'All', label: 'All' },
    { value: 'Articles', label: 'Articles' },
    { value: 'Centers', label: 'Centers' },
    { value: 'Events', label: 'Events' },
    { value: 'People', label: 'People' },
    { value: 'Podcast', label: 'Podcast' },
    { value: 'Programs', label: 'Programs' },
    { value: 'Reports', label: 'Reports' }
];

export const centerOptions = [
    { value: 'All', label: 'All' },
    { value: 'Asia Center', label: 'Asia Center' },
    {
        value: 'Center for Financial Markets',
        label: 'Center for Financial Markets'
    },
    { value: 'Center for Public Health', label: 'Center for Public Health' },
    { value: 'Research Department', label: 'Research Department' }
];

export const topicOptions = [
    { value: 'All', label: 'All' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Programming', label: 'Programming' }
];

export const dateOptions = [
    { value: 'Any', label: 'Any' },
    { value: 'month', label: 'Within the last month' },
    { value: '6month', label: 'Within the six last month' },
    { value: 'year', label: 'Within the last year' }
];

export const sortOptions = ['Relavance', 'Date', 'Name', 'ContentType'];

export const perpageOptions = [20, 40, 60];

export const centers = [
    {
        name: 'Asia Center',
        description: 'Some text about this center',
        link_uri: '/some/path/to/center/landing/page',
        link_text: 'Learn More',
        image: '/images/demo2.jpg',
        order: 1
    },
    {
        name: 'Center for Financial Markets',
        description: 'Some text about this center',
        link_uri: '/some/path/to/center/landing/page',
        link_text: 'Learn More',
        image: '/images/demo2.jpg',
        order: 1
    },
    {
        name: 'Center for Public Health',
        description: 'Some text about this center',
        link_uri: '/some/path/to/center/landing/page',
        link_text: 'Learn More',
        image: '/images/demo3.jpg',
        order: 1
    },
    {
        name: 'Research Department',
        description: 'Some text about this center',
        link_uri: '/some/path/to/center/landing/page',
        link_text: 'Learn More',
        image: '/images/demo3.jpg',
        order: 1
    },
    {
        name: 'Center for Public Health',
        description: 'Some text about this center',
        link_uri: '/some/path/to/center/landing/page',
        link_text: 'Learn More',
        image: '/images/demo3.jpg',
        order: 1
    },
    {
        name: 'Research Department',
        description: 'Some text about this center',
        link_uri: '/some/path/to/center/landing/page',
        link_text: 'Learn More',
        image: '/images/demo3.jpg',
        order: 1
    }
];

export const tracksArray = [
    'Business & Industry',
    'Captial Access & Economic Opportunity',
    'Diversity, Equality & Inclusion',
    'Financial Markets',
    'Health & Medical Research'
];

export const sessionsArray = [
    {
        date: 'Sunday January 03, 2021',
        time: '9:00 AM ET',
        title: 'Trends Reshaping Asset Management',
        speakes: [
            {
                name: 'Michael Milken',
                job: 'Chairman, Milken Institude'
            }
        ],
        moderators: [
            {
                name: 'Raymond Dalio',
                job: 'Founder,Chairman and Co-Chief Investment Officer Bridgewater Associates'
            },
            {
                name: 'Dina',
                job: 'Partner, Goldman sachs'
            }
        ],
        tracks: [],
        url:
            'https://milkeninstitute.org/events/global-conference-2020/livestream/trends-reshaping-asset-management'
    },
    {
        time: '10:15 AM ET',
        title: 'Hedge Funds: Managing a Volatile Market',
        speakes: [
            {
                name: 'Michael Milken',
                job: 'Chairman, Milken Institude'
            }
        ],
        moderators: [
            {
                name: 'Raymond Dalio',
                job: 'Founder,Chairman and Co-Chief Investment Officer Bridgewater Associates'
            },
            {
                name: 'Dina',
                job: 'Partner, Goldman sachs'
            }
        ],
        tracks: [],
        url:
            'https://milkeninstitute.org/events/global-conference-2020/livestream/hedge-funds-managing-volatile-market'
    },
    {
        time: '10:15 AM ET',
        title: 'Racial and Economic Justice: Unlocking the Next Trillion of Economic Productivity',
        speakes: [
            {
                name: 'Michael Milken',
                job: 'Chairman, Milken Institude'
            }
        ],
        moderators: [
            {
                name: 'Raymond Dalio',
                job: 'Founder,Chairman and Co-Chief Investment Officer Bridgewater Associates'
            },
            {
                name: 'Dina',
                job: 'Partner, Goldman sachs'
            }
        ],
        tracks: [],
        url:
            'https://milkeninstitute.org/events/global-conference-2020/livestream/racial-economic-justice-unlocking-next-trillion-economic-productivity'
    },
    {
        time: '11:30 AM ET',
        title: 'A Conversation with US Treasury Secretary Steven Mnuchin',
        speakes: [
            {
                name: 'Michael Milken',
                job: 'Chairman, Milken Institude'
            }
        ],
        moderators: [
            {
                name: 'Raymond Dalio',
                job: 'Founder,Chairman and Co-Chief Investment Officer Bridgewater Associates'
            },
            {
                name: 'Dina',
                job: 'Partner, Goldman sachs'
            }
        ],
        tracks: [],
        url:
            'https://milkeninstitute.org/events/global-conference-2020/livestream/conversation-us-treasury-secretary-steven-mnuchin'
    },
    {
        time: '12:15 PM ET',
        title: 'A Conversation with Jared Bernstein and Jason Furman',
        speakes: [
            {
                name: 'Michael Milken',
                job: 'Chairman, Milken Institude'
            }
        ],
        moderators: [
            {
                name: 'Raymond Dalio',
                job: 'Founder,Chairman and Co-Chief Investment Officer Bridgewater Associates'
            },
            {
                name: 'Dina',
                job: 'Partner, Goldman sachs'
            }
        ],
        tracks: [],
        url:
            'https://milkeninstitute.org/events/global-conference-2020/livestream/conversation-jared-bernstein-jason-furman'
    },
    {
        time: '1:00 PM ET',
        title:
            'Part 1: A Conversation with FCC Chairman Ajit Pai | Part 2: Building for the Future: Digital Infrastructure and 5G',
        speakes: [
            {
                name: 'Michael Milken',
                job: 'Chairman, Milken Institude'
            }
        ],
        moderators: [
            {
                name: 'Raymond Dalio',
                job: 'Founder,Chairman and Co-Chief Investment Officer Bridgewater Associates'
            },
            {
                name: 'Dina',
                job: 'Partner, Goldman sachs'
            }
        ],
        tracks: [],
        url:
            'https://milkeninstitute.org/events/global-conference-2020/livestream/conversation-fcc-chairman-ajit-pai-building-future-digital-infrastructure'
    }
];
