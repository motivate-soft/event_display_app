import React from 'react';
import ProfileSummary from './ProfileSummary';

export default function SessionDetail({ session }) {
    console.log('session', session);
    return (
        <div>
            {/* {session.title && session.title}
            {session.date && session.date}
            {session.time && session.time}
            {session.speakers &&
                session.speakers &&
                session.speakers.map((item, index) => (
                    <ProfileSummary profile={item} key={index} />
                ))}

            {session.moderators &&
                session.moderators.map((item, index) => (
                    <ProfileSummary profile={item} key={index} />
                ))} */}
        </div>
    );
}
