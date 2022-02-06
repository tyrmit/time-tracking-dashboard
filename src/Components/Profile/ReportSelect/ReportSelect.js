import React, { useContext } from 'react';
import ReportPeriodContext from '../../../Store/report-period-context';
import classes from './ReportSelect.module.css';

const ReportSelect = (props) => {
    const reportPeriodContext = useContext(ReportPeriodContext);

    const getClasses = (period) => {
        let classList = classes.NavItem;
        if (reportPeriodContext.reportPeriod === period) {
            classList += ' ' + classes.Highlighted;
        }
        return classList;
    };

    return (
        <nav className={classes.ReportPeriodOptions}>
            <ul className={classes.NavItems}>
                <li
                    className={getClasses('daily')}
                    onClick={() => reportPeriodContext.setReportPeriod('daily')}
                >
                    Daily
                </li>
                <li
                    className={getClasses('weekly')}
                    onClick={() =>
                        reportPeriodContext.setReportPeriod('weekly')
                    }
                >
                    Weekly
                </li>
                <li
                    className={getClasses('monthly')}
                    onClick={() =>
                        reportPeriodContext.setReportPeriod('monthly')
                    }
                >
                    Monthly
                </li>
            </ul>
        </nav>
    );
};

export default ReportSelect;
