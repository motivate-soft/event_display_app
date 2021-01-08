import React, { useState, useEffect } from 'react';
import daySessionsObj from './day_sessioins1.json';
import ProgramDaySession from './ProgramDaySession';
import ProgramDayHeader from './ProgramDayHeader';

export default function ProgramDay(props) {
    const { data } = props.dayData;
    const { field_grid_event_id, field_program_date } = data;

    const [daySessioins, setDaySessioins] = useState([]);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        getDaySessions();
    }, []);

    const getDaySessions = (field_program_date) => {
        // API fetch for day sessions

        setDaySessioins(daySessionsObj.data);
    };

    return (
        <div className="programday-container">
            <ProgramDayHeader date={field_program_date} onToggleOpen={() => setOpened(!opened)} />
            <div className="programday-sessions-container">
                {opened
                    ? daySessioins.map((session, index) => (
                          <ProgramDaySession key={index} session={session} />
                      ))
                    : null}
            </div>
        </div>
    );
}