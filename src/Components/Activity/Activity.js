import classes from './Activity.module.css';

const Activity = (props) => (
    <div className={classes.Activity}>{props.title}</div>
);

export default Activity;
