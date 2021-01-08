import React from 'react';
import moment from 'moment';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const ProgramDayHeader = ({ opened, date, onToggleOpen }) => {
    return (
        <div className="program-day-header" onClick={onToggleOpen}>
            <div className="program-day-toggler">
                {opened ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            <h4>{moment(date).format('dddd MMMM DD, YYYY')}</h4>
        </div>
    );
};
export default ProgramDayHeader;
