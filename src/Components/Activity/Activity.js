import React, { useContext } from 'react';
import ReportPeriodContext from '../../Store/report-period-context';
import classes from './Activity.module.css';
import ellipsisIcon from '../../assets/icons/icon-ellipsis.svg';
import ActivityColorStrip from './ActivityColorStrip/ActivityColorStrip';

const Activity = (props) => {
    const reportPeriodContext = useContext(ReportPeriodContext);

    const getLastPeriodString = (period, result) => {
        let lastPeriod = '';

        switch (period) {
            case 'daily':
                lastPeriod = 'Yesterday';
                break;

            case 'weekly':
                lastPeriod = 'Last Week';
                break;

            case 'monthly':
                lastPeriod = 'Last Month';
                break;
            default:
                break;
        }
        return `${lastPeriod} - ${result}hrs`;
    };

    return (
        <div
            className={[
                classes.Activity,
                classes[props.title.replace(' ', '')],
            ].join(' ')}
        >
            <ActivityColorStrip activity={props.title}></ActivityColorStrip>
            <div
                className={classes.ActivityDetail}
                data-testid={
                    props.title.toLowerCase().replaceAll(' ', '-') + '-card'
                }
            >
                <div className={classes.Row}>
                    <div
                        className={[
                            classes.ActivityElement,
                            classes.ActivityTitle,
                        ].join(' ')}
                    >
                        {props.title}
                    </div>
                    <img src={ellipsisIcon} alt="" />
                </div>
                <div className={[classes.ResultRow, classes.Row].join(' ')}>
                    <div className={classes.CurrentResult}>
                        {props.timeframe.current + 'hrs'}
                    </div>
                    <div>
                        {getLastPeriodString(
                            reportPeriodContext.reportPeriod,
                            props.timeframe.previous
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;
