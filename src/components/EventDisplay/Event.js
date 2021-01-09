import React, { useState, useEffect } from 'react';
import FilterDates from './FilterDates';
import FilterTracks from './FilterTracks';
import SearchInput from './SearchInput';
import FormatSelect from './FormatSelect';
import moment from 'moment';
import ProgramDaysList from './ProgramDaysList';
import './event.scss';

const formatOptions = ['Session name only', 'Name and short summary', 'Session details'];
const tracksArray = [
    'Business & Industry',
    'Captial Access & Economic Opportunity',
    'Diversity, Equality & Inclusion',
    'Financial Markets',
    'Health & Medical Research'
];
const sessionsArray = [
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
        date: 'Wednesday January 06, 2021',
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
        date: 'Thusday January 07, 2021',
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
        date: 'Friday January 08, 2021',
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
        date: 'Saturday January 09, 2021',
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
        date: 'Monday January 11, 2021',
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
const getDatesOfWeek = () => {
    let startOfWeek = moment().startOf('week');
    let endOfWeek = moment().endOf('week');

    let days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    // console.log('days', days);
    return days;
};

export default function Event() {
    const [format, setFormat] = useState(0);
    const [sessions, setSessions] = useState(sessionsArray);

    const [datesOptions, setdatesOptions] = useState(getDatesOfWeek());
    const [sessionCounts, setSessionCounts] = useState(null);
    const [dates, setDates] = useState([]);

    const [tracks, setTracks] = useState([]);
    const [tracksOptions, setTracksOptions] = useState(tracksArray);

    useEffect(() => {
        setDates([]);
    }, [datesOptions]);

    useEffect(() => {
        setTracks([]);
    }, [tracksOptions]);

    const handleFormatChange = (e) => {
        console.log('e.target.value', e.target.value);
        setFormat(e.target.value);
    };

    const handleFilterDisplayToggle = () => {
        // toggle filter display
    };

    const handlePrintPage = () => {
        // print page
    };

    const handleInputChange = (e) => {
        console.log(e.target.value);
    };

    const handleClickDate = (date) => {
        let array = [...dates];
        console.log('handleClickDate', array);
        console.log('handleClickDate', date);
        let index = array.indexOf(date);
        if (index > -1) {
            array.splice(index, 1);
            setDates(array);
        } else {
            array.push(date);
            setDates(array);
        }
    };

    const handleClickAllDates = () => {
        setDates(datesOptions);
    };

    const handleClickNoneDates = () => {
        setDates([]);
    };

    const handleClickTrack = (track) => {
        let array = [...tracks];
        console.log('____handleClickDate', array, track);
        let index = array.indexOf(track);
        if (index > -1) {
            array.splice(index, 1);
            setTracks(array);
        } else {
            array.push(track);
            setTracks(array);
        }
    };

    const handleClickAllTracks = () => {
        setTracks(tracksOptions);
    };

    const handleClickNoneTracks = () => {
        setTracks([]);
    };

    return (
        <div id="events">
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-3 col-sm-5">
                        <button className="btn btn-warning" onClick={handleFilterDisplayToggle}>
                            HIDE FILTERS
                        </button>
                    </div>
                    <div className="col-md-9 col-sm-7">
                        <div className="row">
                            <div className="col-md-6 form-horizontal">
                                <FormatSelect
                                    formatOptions={formatOptions}
                                    format={format}
                                    onChange={handleFormatChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-warning" onClick={handlePrintPage}>
                                    PRINT THIS FORMAT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <SearchInput
                            onChange={handleInputChange}
                            placeholder={'Search This Program'}
                        />
                        <FilterDates
                            datesOptions={datesOptions}
                            dates={dates}
                            onClickDate={handleClickDate}
                            onClickAllDates={handleClickAllDates}
                            onClickNoneDates={handleClickNoneDates}
                        />
                        <FilterTracks
                            tracksOptions={tracksOptions}
                            tracks={tracks}
                            onClickTrack={handleClickTrack}
                            onClickAllTracks={handleClickAllTracks}
                            onClickNoneTracks={handleClickNoneTracks}
                        />
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <ProgramDaysList viewMode={format} />
                    </div>
                </div>
            </div>
        </div>
    );
}
