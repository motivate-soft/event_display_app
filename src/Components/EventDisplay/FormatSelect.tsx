import React from 'react';

interface FormatSelectProps {
    format: number;
    formatOptions: Array<string>;
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const FormatSelect: React.FC<FormatSelectProps> = (props: FormatSelectProps) => {
    const { format, formatOptions, onChange, ...rest } = props;
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
};

export default FormatSelect;
