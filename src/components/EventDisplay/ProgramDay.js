import React, { useState, useEffect } from 'react';
import daySessionsObj from './day_sessioins1.json';
import ProgramDaySession from './ProgramDaySession';
import ProgramDayHeader from './ProgramDayHeader';
import { speakersData, moderatorObj, tracksArray } from './../../api/mockup';

export default function ProgramDay({ dayData, viewMode, onSessionsLoad }) {
    const { field_grid_event_id, field_program_date } = dayData.data;

    const [daySessioins, setDaySessioins] = useState([]);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        getDaySessions();
    }, []);

    const generateTracksArray = () => {
        let length = Math.floor(Math.random() * tracksArray.length);
        const shuffled = tracksArray.sort(() => 0.5 - Math.random());
        let arr = shuffled.slice(0, length);

        return arr;
    };

    const getDaySessions = (field_program_date) => {
        let response = daySessionsObj;
        // API fetch for day sessions

        // fetch('/jsonapi/node/session?jsonapi_include=true&'.concat(apiParams.getQueryString()))
        //     .then((res) => res.json())
        //     .then((ajaxData) => {
        //         console.log('ajaxData', ajaxData);
        //         response = res;
        //     })
        //     .catch((error) => {
        //         console.log('error', error);
        //     });

        // Add speakers, moderators, tracks mockup field
        response.data.forEach((session) => {
            session.description =
                'some text goes here...some text goes here...some text goes here...some text goes here...';
            session.speakers = speakersData;
            session.moderator = moderatorObj;
            session.tracks = generateTracksArray();
        });
        onSessionsLoad(daySessionsObj.data);
        setDaySessioins(daySessionsObj.data);
    };

    return (
        <div className="programday-container">
            <ProgramDayHeader
                date={field_program_date}
                opened={opened}
                onToggleOpen={() => setOpened(!opened)}
            />
            <div className="programday-sessions-container">
                {opened
                    ? daySessioins.map((session, index) => (
                          <ProgramDaySession key={index} session={session} viewMode={viewMode} />
                      ))
                    : null}
            </div>
        </div>
    );
}
