import React from 'react';
import moment from 'moment';
import SelectBox from './SelectBox';

export default function FilterDates({
    datesOptions,
    dates,
    onClickDate,
    onClickAllDates,
    onClickNoneDates
}) {
    console.log('datesOptions', datesOptions);
    console.log('dates', dates);

    const isSelected = (date) => {
        console.log('____isSelected');
        console.log('dates', dates);
        console.log('date', date);
        console.log('date', dates.indexOf(date) > -1);
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
                <div key={index} className="date-filter-row" onClick={() => onClickDate(date)}>
                    <SelectBox selected={isSelected(date)} />
                    {moment(date).format('dddd MMMM DD, YYYY')}
                </div>
            ))}
        </div>
    );
}
