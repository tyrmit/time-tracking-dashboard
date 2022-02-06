import React from 'react';
import classes from './Profile.module.css';
import profilePic from '../../assets/image-jeremy.png';
import ReportSelect from './ReportSelect/ReportSelect';

const Profile = (props) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Profile;
