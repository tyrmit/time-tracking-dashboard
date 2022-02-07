import classes from './ActivityColorStrip.module.css';

const ActivityColorStrip = (props) => {
    let activityIcon = props.activity.toLowerCase().replaceAll(' ', '-');
    let classList = [
        classes.ColorStrip,
        classes[props.activity.replaceAll(' ', '')],
    ];

    return (
        <div className={classList.join(' ')}>
            <img
                className={classes.ActivityIcon}
                src={require(`/src/assets/icons/icon-${activityIcon}.svg`)}
                alt=""
            />
        </div>
    );
};

export default ActivityColorStrip;
