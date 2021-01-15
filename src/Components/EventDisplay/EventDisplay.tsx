import React, { useState, useEffect } from 'react';
import FilterDates from './FilterDates';
import FilterTracks from './FilterTracks';
import SearchInput from './SearchInput';
import FormatSelect from './FormatSelect';
import moment from 'moment';
import './event.scss';
import { tracksArray } from '../../api/mockup';
import ProgramDay from './ProgramDay';
import { getProgramDay } from '../../api/index.js';
import NodeProgramDay from '../../DataTypes/NodeProgramDay';
import SearchBar from './SearchBar';
import { Col, Container, Row } from 'react-bootstrap';

const formatOptions = ['Session name only', 'Name and short summary', 'Session details'];
const getDatesOfWeek = () => {
    let startOfWeek = moment().startOf('week');
    let endOfWeek = moment().endOf('week');
    let days = [];
    let day = startOfWeek;

    while (day <= endOfWeek) {
        days.push(day.toDate());
        day = day.clone().add(1, 'd');
    }

    return days;
};

const sessionsArray: Array<any> = [];

const EVENT_ID = '49a2e35a-e287-41d9-9301-45fc41da8f13';

const PROGRAM_DAYS = [
    '57dcce13-a6b1-49a5-b2d6-a49caa07b591',
    '64750330-ea5f-45c1-91a5-5048cd0886cf',
    '7945ca47-ef92-41aa-8ce3-bb1252fdbd6b'
];

interface EventDisplayProps {
    event_id: string;
}

const EventDisplay: React.FC<EventDisplayProps> = (props: EventDisplayProps) => {
    const [format, setFormat] = useState<number>(0);
    const [sessions, setSessions] = useState([]);
    const [programDays, setProgramDays] = useState<NodeProgramDay[]>([]);

    const [term, setTerm] = useState<string>('');
    const [terms, setTerms] = useState<string[]>([]);

    const [datesOptions, setdatesOptions] = useState<string[]>([]);
    const [dates, setDates] = useState<string[]>([]);
    const [countPrograms, setCountPrograms] = useState<any[]>([]);

    const [tracksOptions, setTracksOptions] = useState<string[]>(tracksArray);
    const [tracks, setTracks] = useState<any[]>([]);
    const [countTracks, setCountTracks] = useState<any[]>([]);

    useEffect(() => {
        fetchProgramDays();
    }, []);

    useEffect(() => {
        let datesArr = programDays.map((obj) => obj.field_program_date);
        let uniqueDatesArr = datesArr.filter((item, i, ar) => ar.indexOf(item) === i);
        setdatesOptions(uniqueDatesArr);

        let countArr: any[] = [];
        uniqueDatesArr.map((date) => {
            countArr.push({
                date: date,
                count: programDays.filter((item) => item.field_program_date === date).length
            });
        });
        console.log('countArr', countArr);
        setCountPrograms(countArr);
    }, [programDays]);

    useEffect(() => {
        setDates(datesOptions);
    }, [datesOptions]);

    useEffect(() => {
        setTracks(tracksOptions);
    }, [tracksOptions]);

    // useEffect(() => {
    //     console.log('sessions', sessions, sessionsArray);
    //     let countArr = [];
    //     tracksOptions.map((track) => {
    //         countArr.push({
    //             track: track,
    //             count: sessions.filter((item) => item.tracks.findIndex((el) => el === track) > -1)
    //                 .length
    //         });
    //     });
    //     console.log('setCountTracks', sessions, countArr);
    //     setCountTracks(countArr);
    // }, [sessions]);

    const fetchProgramDays = async () => {
        let array: any[] = [];
        PROGRAM_DAYS.map((id) => {
            array.push(getProgramDay(id));
        });
        let res = await Promise.all(array);

        let dayArray: any = [];

        res.map((item: any) => {
            dayArray.push(new NodeProgramDay(item.data));
        });
        console.log('fetchProgramDays', dayArray);
        setProgramDays(dayArray);
    };

    const getFilteredProgramDays = () => {
        return programDays.filter(
            (item) => dates.findIndex((el) => el === item.field_program_date) > -1
        );
    };
    /**
     * Format Change handler
     */
    const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormat(parseInt(e.target.value));
    };

    const handleFilterDisplayToggle = () => {
        // toggle filter display
    };

    const handlePrintPage = () => {
        // print page
    };

    /**
     *  terms search handlers
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleInputPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            terms.push(term);
            setTerm('');
            setTerms(terms);
        }
    };

    const handleRemoveTerm = (term: string) => {
        return terms.filter((item) => item !== term);
    };

    const handleRemoveAllTerms = () => {
        setTerms([]);
    };

    /**
     * Date filter handler
     */
    const handleClickDate = (date: string) => {
        let array: string[] = [...dates];

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

    /**
     * Track filter handler
     */
    const handleClickTrack = (track: string) => {
        let array = [...tracks];
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

    // const handleSessionsLoad = (daySessions) => {
    //     let arr = sessionsArray.concat(daySessions);
    //     sessionsArray = arr;
    //     console.log('handleSessionsLoad', daySessions);
    //     setSessions(sessionsArray);
    // };

    return (
        <div id="events">
            <Container>
                <Row className="my-3">
                    <Col sm={5} md={3}>
                        <button className="btn btn-warning" onClick={handleFilterDisplayToggle}>
                            HIDE FILTERS
                        </button>
                    </Col>
                    <Col sm={7} md={6}>
                        <FormatSelect
                            formatOptions={formatOptions}
                            format={format}
                            onChange={handleFormatChange}
                        />
                    </Col>
                    <Col sm={6} md={3}>
                        <button className="btn btn-warning" onClick={handlePrintPage}>
                            PRINT THIS FORMAT
                        </button>
                    </Col>
                </Row>
                <SearchBar
                    term={term}
                    terms={terms}
                    onInputChange={handleInputChange}
                    onInputPress={handleInputPress}
                    onRemoveTerm={handleRemoveTerm}
                    onRemoveAllTerms={handleRemoveAllTerms}
                />
                <Row>
                    <Col sm={6} md={4}>
                        <FilterDates
                            datesOptions={datesOptions}
                            dates={dates}
                            countPrograms={countPrograms}
                            onClickDate={handleClickDate}
                            onClickAllDates={handleClickAllDates}
                            onClickNoneDates={handleClickNoneDates}
                        />
                        <FilterTracks
                            tracksOptions={tracksOptions}
                            tracks={tracks}
                            countTracks={countTracks}
                            onClickTrack={handleClickTrack}
                            onClickAllTracks={handleClickAllTracks}
                            onClickNoneTracks={handleClickNoneTracks}
                        />
                    </Col>
                    <Col sm={6} md={8}>
                        <div className="programday-list">
                            {getFilteredProgramDays().map((item, index) => (
                                <ProgramDay
                                    key={index}
                                    field_grid_event_id={item.field_grid_event_id}
                                    field_program_date={item.field_program_date}
                                    terms={terms}
                                    tracks={tracks}
                                    viewMode={format}
                                    // onSessionsLoad={handleSessionsLoad}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EventDisplay;
