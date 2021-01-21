import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FilterDates from './FilterDates';
import FilterTracks from './FilterTracks';
import FormatSelect from './FormatSelect';
import moment from 'moment';
import ProgramDay from './ProgramDay';
import { getProgramDay } from '../../api/index.js';
import NodeProgramDay from '../../DataTypes/NodeProgramDay';
import SearchBar from './SearchBar';
import './event.scss';

const formatOptions = ['Session name only', 'Name and short summary', 'Session details'];

let sessionsArray: any[] = [];

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

    const [tracksOptions, setTracksOptions] = useState<string[]>([]);
    const [tracks, setTracks] = useState<any[]>([]);
    const [countTracks, setCountTracks] = useState<any[]>([]);

    useEffect(() => {
        console.log('_useEffect');
    });

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
        setCountPrograms(countArr);
    }, [programDays]);

    useEffect(() => {
        setDates(datesOptions);
    }, [datesOptions]);

    useEffect(() => {
        let countArr: any[] = [];
        tracksOptions.map((track) => {
            countArr.push({
                track: track,
                count: sessions.filter((item) => item.field_tracks.indexOf(track) > -1).length
            });
        });
        console.log('setCountTracks', sessions, countArr);
        setCountTracks(countArr);
    }, [tracksOptions, sessions]);

    useEffect(() => {
        setTracks(tracksOptions);
    }, [tracksOptions]);

    useEffect(() => {
        console.log('terms', terms, terms.length);
        if (terms.length > 0) {
            let arr = sessionsArray.filter(
                (session) =>
                    terms.findIndex((term) => session.field_long_description.indexOf(term) > -1) >
                    -1
            );
            console.log('sessions array filtered by terms', arr);
            setSessions(arr);
        } else {
            setSessions(sessionsArray);
        }
    }, [terms]);

    const fetchProgramDays = async () => {
        let array: any[] = [];
        let resArray: any[] = [];
        let dayArray: any = [];

        PROGRAM_DAYS.map((id) => {
            array.push(getProgramDay(id));
        });
        resArray = await Promise.all(array);

        resArray.map((item: any) => {
            dayArray.push(new NodeProgramDay(item.data));
        });
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
     *  Terms filter handlers
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    const handleInputPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            if (terms.indexOf(term) > -1) return;
            let arr = [...terms];
            arr.push(term);
            setTerm('');
            setTerms(arr);
        }
    };

    const handleRemoveTerm = (term: string) => {
        let array = terms.filter((item) => item !== term);
        setTerms(array);
    };

    const handleRemoveAllTerms = () => {
        setTerms([]);
        setSessions(sessionsArray);
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

    const handleSessionsLoad = (daySessions: any[]) => {
        let arr = sessionsArray.concat(daySessions);
        sessionsArray = arr;
        console.log('handleSessionsLoad', sessionsArray);
        setSessions(sessionsArray);

        let tracksArr: any = [];
        sessionsArray.map((session) => {
            session.field_tracks.map((track: string) => {
                if (tracksArr.indexOf(track) < 0) {
                    tracksArr.push(track);
                }
            });
        });
        setTracksOptions(tracksArr);
    };

    return (
        <div id="events">
            <Container>
                <Row className="my-3">
                    <Col sm={5} md={3}>
                        <button className="btn btn-warning" onClick={handleFilterDisplayToggle}>
                            HIDE FILTERS
                        </button>
                    </Col>
                    <Col sm={7} md={6} className="form-horizontal">
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
                    count={sessions.length}
                    onInputChange={handleInputChange}
                    onInputPress={handleInputPress}
                    onRemoveTerm={handleRemoveTerm}
                    onRemoveAllTerms={handleRemoveAllTerms}
                />
                <Row>
                    <Col sm={6} md={4} lg={3}>
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
                    <Col sm={6} md={8} lg={9} style={{ marginTop: -67 }}>
                        <div className="programday-list">
                            {getFilteredProgramDays().map((item, index) => (
                                <ProgramDay
                                    key={index}
                                    field_grid_event_id={item.field_grid_event_id}
                                    field_program_date={item.field_program_date}
                                    terms={terms}
                                    tracks={tracks}
                                    viewMode={format}
                                    onSessionsLoad={handleSessionsLoad}
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
