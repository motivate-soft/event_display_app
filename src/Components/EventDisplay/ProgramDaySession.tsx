import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ProfileSummary from './ProfileSummary';
import { Collapse } from 'react-bootstrap';
import NodeDataFactory from '../NodeDisplay/NodeDataFactory';
import { NodeEventInterface } from '../../DataTypes/NodeEvent';

interface ISession extends NodeEventInterface {
    description: string;
    speakers: Array<any>;
    moderator: any;
    tracks: Array<any>;
}

interface ProgramDaySessionProps {
    session: ISession;
    viewMode: string;
}

const ProgramDaySession: React.FC<ProgramDaySessionProps> = (props: ProgramDaySessionProps) => {
    const { session, viewMode } = props;

    const [expanded, setExpanded] = useState<boolean>(false);
    const DataObject = NodeDataFactory(session);

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
                    <button
                        className="btn btn-outline-primary"
                        aria-controls="session-collapse-content"
                        aria-expanded={expanded}
                        onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'View Less' : 'View More'}
                    </button>
                </div>
                <Collapse in={expanded}>
                    <div id="session-collapse-content">
                        <p>{session.description}</p>
                        <ProfileSummary profile={session.moderator} />
                        <h6>Speakers</h6>
                        {session.speakers &&
                            session.speakers.map((speaker, index) => (
                                <ProfileSummary key={index} profile={speaker} />
                            ))}
                        <h6>Tracks</h6>
                        <p>
                            {session.tracks &&
                                session.tracks.map((track, index) =>
                                    index < session.tracks.length - 1 ? (
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
                    <button
                        className="btn btn-outline-primary"
                        aria-controls="session-collapse-content"
                        aria-expanded={expanded}
                        onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'View Less' : 'View More'}
                    </button>
                </div>
                <p>{session.description}</p>
                <Collapse in={expanded}>
                    <div id="session-collapse-content">
                        <ProfileSummary profile={session.moderator} />
                        <h6>Speakers</h6>
                        {session.speakers &&
                            session.speakers.map((speaker, index) => (
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
                <p>{session.description}</p>
                <ProfileSummary profile={session.moderator} />
                <h6>Speakers</h6>
                {session.speakers &&
                    session.speakers.map((speaker, index) => (
                        <ProfileSummary key={index} profile={speaker} />
                    ))}
            </>
        );
    };

    const renderSessionContent = () => {
        console.log('viewMode', viewMode);
        if (parseInt(viewMode) === 0) {
            return renderTitleOnly();
        } else if (parseInt(viewMode) === 1) {
            return renderTitleSummary();
        } else {
            return renderDetail();
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