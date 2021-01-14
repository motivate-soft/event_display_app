import React, { useState, useEffect } from 'react';
import ProgramDaySession from './ProgramDaySession';
import ProgramDayHeader from './ProgramDayHeader';
import NodeSession, { NodeSessionInterface } from '../../DataTypes/NodeSession';
import { getDaySessions } from '../../api/index.js';
import { speakersArray, moderatorObj, tracksArray } from './../../api/mockup';

interface ProgramDayProps {
    field_grid_event_id: string;
    field_program_date: string;
    terms: string[];
    tracks: string[];
    viewMode: number;
}

const ProgramDay: React.FC<ProgramDayProps> = (props: ProgramDayProps) => {
    const { field_grid_event_id, field_program_date, terms, tracks, viewMode } = props;

    const [daySessions, setDaySessions] = useState<NodeSessionInterface[]>([]);
    const [opened, setOpened] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchDaySessions();
    }, []);

    const generateRandomTracksArray = () => {
        let length = Math.floor(Math.random() * tracksArray.length);
        const shuffled = tracksArray.sort(() => 0.5 - Math.random());
        let arr = shuffled.slice(0, length);
        return arr;
    };

    const fetchDaySessions = async () => {
        console.log('fetchDaySessions', field_grid_event_id, field_program_date);
        let array: any[] = await getDaySessions(field_grid_event_id, field_program_date);
        let sessionsArr: any[] = [];
        console.log('fetchDaySessions', array);

        // Add speakers, moderators, tracks mockup field
        array.map((session: any) => {
            session.field_long_description =
                'some text goes here...some text goes here...some text goes here...some text goes here...';
            session.field_speakers = speakersArray;
            session.field_moderator = moderatorObj;
            session.field_tracks = generateRandomTracksArray();
            const item = new NodeSession(session);
            sessionsArr.push(item);
        });
        console.log('fetchDaySessions', sessionsArr);

        setDaySessions(array);
    };

    const filterByTerms = (sessions: NodeSessionInterface[]) => {
        if (terms.length > 0) {
            return sessions.filter(
                (session) =>
                    terms.findIndex((term) => session.field_long_description.includes(term)) > -1
            );
        } else {
            return sessions;
        }
    };

    const filterByTracks = (sessions: NodeSessionInterface[]) => {
        return sessions.filter(
            (session) => session.field_tracks.filter((strack) => tracks.includes(strack)).length > 0
        );
    };

    return (
        <div className="programday-container">
            <ProgramDayHeader
                date={field_program_date}
                opened={opened}
                onToggleOpen={() => setOpened(!opened)}
            />
            <div className="programday-sessions-container">
                {opened ? (
                    daySessions.length > 0 ? (
                        filterByTracks(filterByTerms(daySessions)).map((session, index) => (
                            <ProgramDaySession key={index} session={session} viewMode={viewMode} />
                        ))
                    ) : (
                        <p>No elements</p>
                    )
                ) : null}
            </div>
        </div>
    );
};

export default ProgramDay;
