import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaFacebookF
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row padding-top-10">
                    <div className="col-md-8 col-sm-12">
                        <ul className="list-unstyled list-inline pull-left footer-navbar">
                            <li>
                                <a href="#">NEWSROOM</a>
                            </li>
                            <li>
                                <a href="#">EXPERTS</a>
                            </li>
                            <li>
                                <a href="#">POWER OF IDEAS</a>
                            </li>
                            <li>
                                <a href="#">CAREERS</a>
                            </li>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        Stap up to date on search and event from the the Milken lrotitute
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <ul className="social-footer list-unstyled list-inline float-left">
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaYoutube />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <button className="btn float-right">JOIN OUR MAILING LIST</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
