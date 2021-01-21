import React from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { ProfileInterface } from '../../DataTypes/Profile';
import Footer from './Footer';
import './profile.scss';

const profileData = {
    role: 'moderator',
    name: 'Michael Milken',
    avatar: '/images/avatar2.png',
    job: 'Chairman, Milken Institue',
    description: 'Some text goes here...Some text goes here...Some text goes here...',
    link: 'github.com/robert-upwork'
};

interface ProfileProps extends ProfileInterface {
    role: string;
    name: string;
    avatar: string;
    job: string;
    description: string;
    link: string;
}

const ProfileDetail: React.FC<ProfileProps> = (props: ProfileProps) => {
    const { role, name, avatar, job, description, link } = profileData;

    const history = useHistory();

    return (
        <div id="profile-container">
            <div className="profile-header">
                <div className="container text-left">
                    <h2>MEA Summit 2020</h2>
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="profile-body">
                <div className="container">
                    <div className="profile-title d-flex">
                        <h3>{role === 'speaker' ? 'Speaker' : 'Moderator'}'s Biography</h3>
                        <div className="profile-social-links">
                            <a href={`//${link}`} target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                            <a href={`//${link}`} target="_blank" rel="noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    <div className="profile-detail">
                        <div className="profile-avatar">
                            <div className="avatar-wrapper">
                                <img src={avatar} alt={name} />
                            </div>
                        </div>
                        <div className="profile-desc">
                            <h4>{name}</h4>
                            <h5>{job}</h5>
                            <p>{description}</p>
                            <div className="panel-desc">
                                <h3>Panels</h3>
                                <div className="extra-info">
                                    <p>Meet the Author: {name}</p>
                                    <p>
                                        Opening Plenary | Part 1: A Conversation with His Excellency
                                        Khaldoon Khalifa Al Mubarak and Michael Milken | Part 2:
                                        Global Overview
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => history.goBack()}>
                                    RETURN TO SPEAKERS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfileDetail;
