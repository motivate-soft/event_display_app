import React from 'react';
import moment from 'moment';
import SelectBox from './SelectBox';

export default function FilterDates({
    datesOptions,
    dates,
    countPrograms,
    onClickDate,
    onClickAllDates,
    onClickNoneDates
}) {
    console.log('datesOptions', datesOptions);
    console.log('dates', dates);
    console.log('countPrograms', countPrograms);

    const isSelected = (date) => {
        return dates.indexOf(date) > -1;
    };

    return (
        <div className="date-filter-box">
            <div className="date-filter-header">
                <h6>Dates</h6>
                <div className="date-filter-actions">
                    <span onClick={onClickAllDates} className="filter-all">
                        Click all
                    </span>
                    {' |'}
                    <span onClick={onClickNoneDates} className="filter-none">
                        {' '}
                        None
                    </span>
                </div>
            </div>
            {datesOptions.map((date, index) => (
                <div key={index} className="date-filter-row">
                    <SelectBox selected={isSelected(date)} onClick={() => onClickDate(date)} />
                    {moment(date).format('dddd MMMM DD, YYYY')}
                    <span className="ml-auto">
                        {countPrograms &&
                            countPrograms.length > 0 &&
                            countPrograms.filter((item) => item.date === date)[0].count}
                    </span>
                </div>
            ))}
        </div>
    );
}
