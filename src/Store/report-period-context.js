import React from 'react';

const ReportPeriodContext = React.createContext({
    reportPeriod: 'weekly',
    setReportPeriod: () => {},
});

export default ReportPeriodContext;
