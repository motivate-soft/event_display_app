import React, { useState } from 'react';
import SelectBox from './SelectBox';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FilterTracks({
    tracksOptions,
    tracks,
    onClickTrack,
    onClickAllTracks,
    onClickNoneTracks
}) {
    console.log('tracksOptions', tracksOptions);
    console.log('tracks', tracks);

    const [expanded, setExpanded] = useState(false);

    const isSelected = (track) => {
        return tracks.indexOf(track) > -1;
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
                    return (
                        <div
                            key={index}
                            className="track-filter-row"
                            onClick={() => onClickTrack(track)}>
                            <SelectBox selected={isSelected(track)} />
                            {track}
                        </div>
                    );
                } else {
                    if (expanded) {
                        return (
                            <div
                                key={index}
                                className="track-filter-row"
                                onClick={() => onClickTrack(track)}>
                                <SelectBox selected={isSelected(track)} />
                                {track}
                            </div>
                        );
                    } else {
                        return null;
                    }
                }
            })}
            {renderArrow()}
        </div>
    );
}
