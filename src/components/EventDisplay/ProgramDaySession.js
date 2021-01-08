import React from 'react';
import moment from 'moment';

export default function ProgramDaySession({ session }) {
    const renderTime = (session) => {
        let startTime = moment(session.field_start_end.value).format('hh:mm A');
        let endTime = moment(session.field_start_end.end_value).format('hh:mm A');
        return (
            <div>
                {startTime} to {endTime}
            </div>
        );
    };
    return (
        <div className="programday-session">
            {renderTime(session)}
            <h5>{session.title}</h5>
        </div>
    );
}
