import React from 'react';
import classes from './Profile.module.css';
import profilePic from '../../assets/image-jeremy.png';
import ReportSelect from './ReportSelect/ReportSelect';

const Profile = (props) => {
    return (
        <div className={classes.Profile}>
            <div className={classes.ProfileDetail}>
                <img
                    className={classes.ProfilePic}
                    src={profilePic}
                    alt="Profile Pic"
                />
                <div className={classes.ReportFor}>
                    Report for <br />
                    <h3>Jeremy Robson</h3>
                </div>
            </div>
            <ReportSelect></ReportSelect>
        </div>
    );
};

export default Profile;
