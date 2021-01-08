import React from 'react';
import programDayData1 from './program_day1.json';
import programDayData2 from './program_day2.json';
import programDayData3 from './program_day3.json';
import ProgramDay from './ProgramDay';

export default function ProgramDaysList() {
    const programDayData = [programDayData1, programDayData2, programDayData3];
    return (
        <div className="programday-list">
            {programDayData.map((dayData, index) => (
                <ProgramDay key={index} dayData={dayData} />
            ))}
        </div>
    );
}
