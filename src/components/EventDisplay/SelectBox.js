import React from 'react';
import { FaCheck } from 'react-icons/fa';
import classnames from 'classnames';

export default function SelectBox({ selected }) {
    return (
        <div className={classnames('d-flex', 'tick-select', { selected: selected })}>
            <FaCheck />
        </div>
    );
}
