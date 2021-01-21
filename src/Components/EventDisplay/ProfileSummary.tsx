import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileInterface } from '../../DataTypes/Profile';

interface ProfileSummaryProps {
    profile: ProfileInterface;
}

const ProfileSummary: React.FC<ProfileSummaryProps> = (props: ProfileSummaryProps) => {
    const { profile } = props;

    return (
        <div className="profile-summary">
            <div className="row">
                <div className="cole-sm-6 col-lg-3">
                    <div className="avatar-wrapper">
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="img-fluid rounded-circle"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-9">
                    {/* <a href={`//${profile.link}`} target="_blank" rel="noreferrer"> */}
                    <Link to="/profile">{profile.name}</Link>
                    <h6>{profile.job}</h6>
                </div>
            </div>
        </div>
    );
};

export default ProfileSummary;
