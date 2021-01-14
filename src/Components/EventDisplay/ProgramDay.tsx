import React, { useState, useEffect } from 'react';
import daySessionsObj from './day_sessioins1.json';
import ProgramDaySession from './ProgramDaySession';
import ProgramDayHeader from './ProgramDayHeader';
import { speakersData, moderatorObj, tracksArray } from './../../api/mockup';
import ParagraphProgramDay, {
    ParagraphProgramDayInterface
} from '../../DataTypes/ParagraphProgramDay';
import Loading from '../Loading';
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';
import { NodeSessionInterface } from '../../DataTypes/NodeSession';
import NodeDisplayList from '../NodeDisplay/NodeDisplayList';
import ErrorDisplay from '../../Utility/ErrorDisplay';
import Listable, { ListableInterface } from '../../DataTypes/Listable';
import DateParts from '../../Utility/DateParts';

const API_URL = 'https://live-freshdrupalmi.pantheonsite.io/';

interface ProgramDayProps {
    field_grid_event_id: string;
    field_program_date: string;
    viewMode: boolean;
}

interface ProgramDayState {
    daySessions: Array<NodeSessionInterface>;
    opened: boolean;
    Loading: boolean;
}

const ProgramDay: React.FC<ProgramDayProps> = (props: ProgramDayProps) => {
    const { field_grid_event_id, field_program_date, viewMode } = props;

    const [daySessions, setDaySessions] = useState<Array<NodeSessionInterface>>([]);
    const [opened, setOpened] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    // const [errors, setErrors] = useState<Array<any>>([]);

    useEffect(() => {
        getDaySessions();
    }, []);

    const generateTracksArray = () => {
        let length = Math.floor(Math.random() * tracksArray.length);
        const shuffled = tracksArray.sort(() => 0.5 - Math.random());
        let arr = shuffled.slice(0, length);

        return arr;
    };

    const getDaySessions = () => {
        let response = daySessionsObj;
        // API fetch for day sessions

        // const { data } = this.props;
        // const { daySessions, loading, loaded } = this.state;
        // const DataObject = new ParagraphProgramDay(data);
        if (daySessions.length === 0 && !loading) {
            const apiParams = new DrupalJsonApiParams();
            // const eventDate = DataObject.getDateObject().toISOString().split('T').shift();
            apiParams.addInclude(['field_livestream', 'field_people', 'field_event']);
            apiParams.addFilter('field_event.field_grid_event_id', field_grid_event_id);
            apiParams.addFilter('field_start_end.value', field_program_date, 'STARTS_WITH');

            console.debug('Query Params:', apiParams.getQueryObject());

            apiParams.addSort('field_start_end.value', 'asc');
            setLoading(true);

            fetch(
                API_URL +
                    '/jsonapi/node/session?jsonapi_include=true&'.concat(apiParams.getQueryString())
            )
                .then((res) => res.json())
                .then((response) => {
                    console.debug('back from ajax', response);

                    if (response.errors) {
                        // toReturn.errors.concat(
                        //     response.errors.map((item) => {
                        //         return new Error(item.detail);
                        //     })
                        // );
                    }
                    if (response.data.length === 0) {
                        // toReturn.errors.push(Error('no session data'));
                    }
                    if (Array.isArray(response.data)) {
                        console.log('response.data', response.data);
                        // Add speakers, moderators, tracks mockup field
                        response.data.forEach((session: any) => {
                            session.description =
                                'some text goes here...some text goes here...some text goes here...some text goes here...';
                            session.speakers = speakersData;
                            session.moderator = moderatorObj;
                            session.tracks = generateTracksArray();
                        });
                        setDaySessions(response.data);

                        // onSessionsLoad(daySessionsObj.data);
                        // setDaySessions(daySessionsObj.data);
                    }
                })
                .catch((reason) => {
                    // const { errors } = this.state;
                    // errors.push(new Error(reason));
                    // this.setState({ errors: errors });
                });
        }
    };

    return (
        <div className="programday-container">
            <ProgramDayHeader
                date={field_program_date}
                opened={opened}
                onToggleOpen={() => setOpened(!opened)}
            />
            <div className="programday-sessions-container">
                {opened
                    ? daySessions.map((session, index) => (
                          <ProgramDaySession key={index} session={session} viewMode={viewMode} />
                      ))
                    : null}
            </div>
        </div>
    );
};

export default ProgramDay;
