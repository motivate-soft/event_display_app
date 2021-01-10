import React from 'react';
import { FaCheck } from 'react-icons/fa';
import classnames from 'classnames';

export default function SelectBox({ selected, ...rest }) {
    return (
        <div className={classnames('d-flex', 'tick-select', { selected: selected })} {...rest}>
            <FaCheck />
        </div>
    );
}
