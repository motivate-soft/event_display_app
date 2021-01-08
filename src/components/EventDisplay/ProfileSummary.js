import React from 'react';

export default function ProfileSummary({ profile }) {
    return (
        <div>
            {profile.name}
            {profile.job}
        </div>
    );
}
