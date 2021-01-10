import React, { useState, useEffect } from 'react';
import FilterDates from './FilterDates';
import FilterTracks from './FilterTracks';
import SearchInput from './SearchInput';
import FormatSelect from './FormatSelect';
import moment from 'moment';
import ProgramDaysList from './ProgramDaysList';
import './event.scss';
import { tracksArray } from './../../api/mockup';
import programDayData1 from './program_day1.json';
import programDayData2 from './program_day2.json';
import programDayData3 from './program_day3.json';
import ProgramDay from './ProgramDay';

const formatOptions = ['Session name only', 'Name and short summary', 'Session details'];
const programDayData = [programDayData1, programDayData2, programDayData3];
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

let sessionsArray = [];

export default function Event() {
    const [format, setFormat] = useState(0);
    const [sessions, setSessions] = useState([]);

    const [datesOptions, setdatesOptions] = useState([]);
    const [programDays, setProgramDays] = useState([]);
    const [dates, setDates] = useState([]);
    const [countPrograms, setCountPrograms] = useState([]);

    const [tracksOptions, setTracksOptions] = useState(tracksArray);
    const [tracks, setTracks] = useState([]);
    const [countTracks, setCountTracks] = useState([]);

    useEffect(() => {
        setProgramDays(programDayData);
    }, []);

    useEffect(() => {
        let datesArr = programDays.map((dayObj) => dayObj.data.field_program_date);
        let uniqueDatesArr = datesArr.filter((item, i, ar) => ar.indexOf(item) === i);
        setdatesOptions(uniqueDatesArr);
        let countArr = [];
        uniqueDatesArr.map((date) => {
            countArr.push({
                date: date,
                count: programDays.filter((item) => item.data.field_program_date === date).length
            });
        });
        console.log('countArr', countArr);
        setCountPrograms(countArr);
    }, [programDays]);

    useEffect(() => {
        setDates(datesOptions);
    }, [datesOptions]);

    useEffect(() => {
        setTracks([]);
    }, [tracksOptions]);

    useEffect(() => {
        console.log('sessions', sessions, sessionsArray);
        let countArr = [];
        tracksOptions.map((track) => {
            countArr.push({
                track: track,
                count: sessions.filter((item) => item.tracks.findIndex((el) => el === track) > -1)
                    .length
            });
        });
        console.log('setCountTracks', sessions, countArr);
        setCountTracks(countArr);
    }, [sessions]);

    const getFilteredProgramDays = () => {
        return programDays.filter(
            (item) => dates.findIndex((el) => el === item.data.field_program_date) > -1
        );
    };

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

    const handleSessionsLoad = (daySessions) => {
        let arr = sessionsArray.concat(daySessions);
        sessionsArray = arr;
        console.log('handleSessionsLoad', daySessions);
        setSessions(sessionsArray);
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
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <div className="programday-list">
                            {getFilteredProgramDays().map((dayData, index) => (
                                <ProgramDay
                                    key={index}
                                    dayData={dayData}
                                    viewMode={format}
                                    onSessionsLoad={handleSessionsLoad}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
