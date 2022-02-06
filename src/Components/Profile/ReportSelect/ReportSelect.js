import React, { useContext } from 'react';
import ReportPeriodContext from '../../../Store/report-period-context';
import classes from './ReportSelect.module.css';

const ReportSelect = (props) => {
    const reportPeriodContext = useContext(ReportPeriodContext);
    return (
        <nav className={classes.ReportPeriodOptions}>
            <ul className={classes.NavItems}>
                <li
                    className={classes.NavItem}
                    onClick={() => reportPeriodContext.setReportPeriod('daily')}
                >
                    Daily
                </li>
                <li
                    className={classes.NavItem}
                    onClick={() =>
                        reportPeriodContext.setReportPeriod('weekly')
                    }
                >
                    Weekly
                </li>
                <li
                    className={classes.NavItem}
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
