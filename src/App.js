// import logo from './logo.svg';
import './App.css';

import data from './assets/data/data.json';
import Activity from './Components/Activity/Activity';
import Profile from './Components/Profile/Profile';
import Layout from './HLC/Layout/Layout';

function App() {
    console.log(data);
    const activityCards = data.map((activity) => {
        return (
            <Activity key={activity.title} title={activity.title}></Activity>
        );
    });

    return (
        <Layout>
            <Profile></Profile>
            {activityCards}
        </Layout>
    );
}

export default App;
