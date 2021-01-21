import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ProfileSummary from './ProfileSummary';
import { Collapse } from 'react-bootstrap';
import { NodeSessionInterface } from '../../DataTypes/NodeSession';

interface ProgramDaySessionProps {
    session: NodeSessionInterface;
    viewMode: number;
}

const ProgramDaySession: React.FC<ProgramDaySessionProps> = (props: ProgramDaySessionProps) => {
    const { session, viewMode } = props;

    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => {
        console.log('ProgramDaySession', session);
    }, [session]);

    const renderSessionTime = (session: any) => {
        let startTime = moment(session.field_start_end.value).format('hh:mm A');
        let endTime = moment(session.field_start_end.end_value).format('hh:mm A');
        return (
            <div>
                {startTime} <br /> to
                <br /> {endTime}
            </div>
        );
    };

    const renderTitleOnly = () => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h5>{session.title}</h5>
                    <div>
                        <button
                            className="btn"
                            aria-controls="session-collapse-content"
                            aria-expanded={expanded}
                            onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'View Less' : 'View More'}
                        </button>
                    </div>
                </div>
                <Collapse in={expanded}>
                    <div id="session-collapse-content">
                        <p>{session.field_long_description}</p>
                        <h5>Moderator</h5>
                        <ProfileSummary profile={session.field_moderator} />
                        <h5>Speakers</h5>
                        {session.field_speakers &&
                            session.field_speakers.map((speaker, index) => (
                                <ProfileSummary key={index} profile={speaker} />
                            ))}
                        <h6>Tracks</h6>
                        <p>
                            {session.field_tracks &&
                                session.field_tracks.map((track, index) =>
                                    index < session.field_tracks.length - 1 ? (
                                        <>{track} | </>
                                    ) : (
                                        <>{track}</>
                                    )
                                )}
                        </p>
                    </div>
                </Collapse>
            </>
        );
    };

    const renderTitleSummary = () => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h5>{session.title}</h5>
                    <div>
                        <button
                            className="btn"
                            aria-controls="session-collapse-content"
                            aria-expanded={expanded}
                            onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'View Less' : 'View More'}
                        </button>
                    </div>
                </div>
                <p>{session.field_long_description}</p>
                <Collapse in={expanded}>
                    <div id="session-collapse-content">
                        <h5>Moderator</h5>
                        <ProfileSummary profile={session.field_moderator} />
                        <h5>Speakers</h5>
                        {session.field_speakers &&
                            session.field_speakers.map((speaker, index) => (
                                <ProfileSummary key={index} profile={speaker} />
                            ))}
                    </div>
                </Collapse>
            </>
        );
    };

    const renderDetail = () => {
        return (
            <>
                <h5>{session.title}</h5>
                <p>{session.field_long_description}</p>
                <h5>Moderator</h5>
                <ProfileSummary profile={session.field_moderator} />
                <h5>Speakers</h5>
                {session.field_speakers &&
                    session.field_speakers.map((speaker, index) => (
                        <ProfileSummary key={index} profile={speaker} />
                    ))}
            </>
        );
    };

    const renderSessionContent = () => {
        console.log('viewMode', viewMode);

        switch (viewMode) {
            case 1:
                return renderTitleSummary();
            case 2:
                return renderDetail();
            default:
                return renderTitleOnly();
        }
    };

    return (
        <div className="programday-session">
            <div className="row">
                <div className="cole-sm-3 col-lg-2">{renderSessionTime(session)}</div>
                <div className="cole-sm-9 col-lg-10">{renderSessionContent()}</div>
            </div>
        </div>
    );
};

export default ProgramDaySession;
