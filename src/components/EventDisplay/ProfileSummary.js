import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileSummary({ profile }) {
    return (
        <div className="profile-summary">
            <div className="row">
                <div className="cole-sm-3 col-lg-2">
                    <div className="avatar-container">
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="img-fluid img-thumbnail rounded-circle"
                        />
                    </div>
                </div>
                <div className="cole-sm-9 col-lg-10">
                    {/* <a href={`//${profile.link}`} target="_blank" rel="noreferrer"> */}
                    <Link to="/profile">{profile.name}</Link>
                    <h6>{profile.job}</h6>
                </div>
            </div>
        </div>
    );
}
