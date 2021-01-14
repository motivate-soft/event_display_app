import React, { useState } from 'react';
import SelectBox from './SelectBox';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FilterTracksProps {
    tracksOptions: Array<string>;
    tracks: Array<string>;
    countTracks: Array<any>;
    onClickTrack: (track: string) => void;
    onClickAllTracks: () => void;
    onClickNoneTracks: () => void;
}

const FilterTracks: React.FC<FilterTracksProps> = (props: FilterTracksProps) => {
    const {
        tracksOptions,
        tracks,
        countTracks,
        onClickTrack,
        onClickAllTracks,
        onClickNoneTracks
    } = props;

    const [expanded, setExpanded] = useState(false);

    const isSelected = (track: string) => {
        return tracks.indexOf(track) > -1;
    };

    const renderOptionRow = (track: string) => {
        return (
            <div className="track-filter-row">
                <SelectBox selected={isSelected(track)} onClick={() => onClickTrack(track)} />
                {track}
                <span className="ml-auto">
                    {countTracks &&
                        countTracks.length > 0 &&
                        countTracks.filter((item) => item.track === track)[0].count}
                </span>
            </div>
        );
    };

    const renderArrow = () => {
        return (
            <div className="d-flex justify-content-center align-items-center py-3">
                {expanded ? (
                    <FaChevronUp onClick={() => setExpanded(false)} />
                ) : (
                    <FaChevronDown onClick={() => setExpanded(true)} />
                )}
            </div>
        );
    };

    return (
        <div className="track-filter-box">
            <div className="track-filter-header">
                <h6>Tracks</h6>
                <div className="track-filter-actions">
                    <span onClick={onClickAllTracks} className="filter-all">
                        Click all
                    </span>
                    {' |'}
                    <span onClick={onClickNoneTracks} className="filter-none">
                        {' '}
                        None
                    </span>
                </div>
            </div>
            {tracksOptions.map((track, index) => {
                if (index < 2) {
                    return renderOptionRow(track);
                } else {
                    if (expanded) {
                        return renderOptionRow(track);
                    } else {
                        return null;
                    }
                }
            })}
            {renderArrow()}
        </div>
    );
};

export default FilterTracks;
