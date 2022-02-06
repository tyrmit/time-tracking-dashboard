// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import data from './assets/data/data.json';
import Activity from './Components/Activity/Activity';
import Profile from './Components/Profile/Profile';
import Layout from './HLC/Layout/Layout';
import ReportPeriodContext from './Store/report-period-context';

function App() {
    const [reportPeriod, setReportPeriod] = useState('weekly');
    console.log(data);
    const activityCards = data.map((activity) => {
        return (
            <Activity
                key={activity.title}
                title={activity.title}
                timeframe={activity.timeframes[reportPeriod]}
            ></Activity>
        );
    });

    return (
        <Layout>
            <ReportPeriodContext.Provider
                value={{ reportPeriod, setReportPeriod }}
            >
                <Profile></Profile>
                {activityCards}
            </ReportPeriodContext.Provider>
        </Layout>
    );
}

export default App;
