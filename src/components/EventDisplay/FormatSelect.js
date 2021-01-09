import React from 'react';

export default function FormatSelect({ format, formatOptions, onChange, ...rest }) {
    return (
        <div className="form-group form-inline format-select-box">
            <label className="control-label mr-2" htmlFor="format">
                Format :
            </label>
            <select name="format" value={format} onChange={onChange} {...rest}>
                {formatOptions.map((item, index) => (
                    <option key={index} value={index}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
