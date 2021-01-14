import React from 'react';
import moment from 'moment';
import SelectBox from './SelectBox';

interface FilterDatesProps {
    datesOptions: Array<string>;
    dates: Array<string>;
    countPrograms: Array<any>;
    onClickDate: (date: string) => void;
    onClickAllDates: () => void;
    onClickNoneDates: () => void;
}

const FilterDates: React.FC<FilterDatesProps> = (props: FilterDatesProps) => {
    const {
        datesOptions,
        dates,
        countPrograms,
        onClickDate,
        onClickAllDates,
        onClickNoneDates
    } = props;

    const isSelected = (date: string) => {
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
                    <SelectBox selected={isSelected(date)} onClick={(e) => onClickDate(date)} />
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
};

export default FilterDates;
