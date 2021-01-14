import React from 'react';
import programDayData1 from './program_day1.json';
import programDayData2 from './program_day2.json';
import programDayData3 from './program_day3.json';
import ProgramDay from './ProgramDay';

interface ProgramDaysListProps {
    viewMode: boolean;
}

const ProgramDaysList: React.FC<ProgramDaysListProps> = (props: ProgramDaysListProps) => {
    // const programDayData = [programDayData1, programDayData2, programDayData3];
    const { viewMode } = props;
    return (
        <div className="programday-list">
            {/* {programDayData.map((dayData, index) => (
                <ProgramDay key={index} dayData={dayData} viewMode={viewMode} />
            ))} */}
            <ProgramDay
                field_grid_event_id={'gc20'}
                field_program_date={'2020-10-13'}
                viewMode={viewMode}
            />
        </div>
    );
};
