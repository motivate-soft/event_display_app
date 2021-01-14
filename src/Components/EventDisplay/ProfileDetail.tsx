import React from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { ProfileInterface } from '../../DataTypes/Profile';

const profileData = {
    role: 'speaker',
    name: 'Raymond Dalio',
    avatar: '/avatar1.jpg',
    job: 'CEO',
    description: 'Some text goes here...Some text goes here...Some text goes here...',
    link: 'github.com/robert-upwork'
};

interface ProfileProps extends ProfileInterface {}

const ProfileDetail: React.FC<ProfileProps> = (props: ProfileProps) => {
    const { role, name, avatar, job, description, link } = profileData;

    return (
        <div id="profile-container">
            <div className="container">
                <h1 className="my-3">{name}</h1>
            </div>
            <div className="seperator" />
            <div className="container">
                <h3 className="my-3">{role === 'speaker' ? 'Speaker' : 'Moderator'}'s Biography</h3>
                <div className="row">
                    <div className="col-sm-3 col-lg-2">
                        <img src={avatar} alt={name} />
                    </div>
                    <div className="col-sm-9 col-lg-10">
                        <div className="d-flex justify-content-between">
                            <h5>{name}</h5>
                            <div className="profile-social-links">
                                <a href={`//${link}`} target="_blank" rel="noreferrer">
                                    <FaTwitter />
                                </a>
                                <a href={`//${link}`} target="_blank" rel="noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;
