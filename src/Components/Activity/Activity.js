import { useContext } from 'react';
import ReportPeriodContext from '../../Store/report-period-context';
import classes from './Activity.module.css';

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
        <div className={classes.Activity}>
            <div className={[classes.TitleRow, classes.Row].join(' ')}>
                <div
                    className={[
                        classes.ActivityElement,
                        classes.ActivityTitle,
                    ].join(' ')}
                >
                    {props.title}
                </div>
                <div className={classes.ActivityElement}>el</div>
            </div>
            <div className={[classes.ResultRow, classes.Row].join(' ')}>
                <div
                    className={[
                        classes.ActivityElement,
                        classes.CurrentResult,
                    ].join(' ')}
                >
                    {props.timeframe.current + 'hrs'}
                </div>
                <div
                    className={[
                        classes.ActivityElement,
                        classes.LastResult,
                    ].join(' ')}
                >
                    {getLastPeriodString(
                        reportPeriodContext.reportPeriod,
                        props.timeframe.previous
                    )}
                </div>
            </div>
        </div>
    );
};

export default Activity;
