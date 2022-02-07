import { render, screen } from '@testing-library/react';
import App from './App';

function clickMenu(menuName) {
    const menuItem = screen.getByText(menuName);
    menuItem.click();
}

describe('Key elements render', () => {
    it('renders Profile card', () => {
        render(<App />);
        const profileCard = screen.getByText(/report for/i);
        expect(profileCard).toBeInTheDocument();
    });

    it('renders Work card', () => {
        render(<App />);
        const activityCard = screen.getByText(/Work/);
        expect(activityCard).toBeInTheDocument();
    });

    it('renders Play card', () => {
        render(<App />);
        const activityCard = screen.getByText(/Play/);
        expect(activityCard).toBeInTheDocument();
    });

    it('renders Study card', () => {
        render(<App />);
        const activityCard = screen.getByText(/Study/);
        expect(activityCard).toBeInTheDocument();
    });

    it('renders Exercise card', () => {
        render(<App />);
        const activityCard = screen.getByText(/Exercise/);
        expect(activityCard).toBeInTheDocument();
    });

    it('renders Social card', () => {
        render(<App />);
        const activityCard = screen.getByText(/Social/);
        expect(activityCard).toBeInTheDocument();
    });

    it('renders Self Care card', () => {
        render(<App />);
        const activityCard = screen.getByText(/Self Care/);
        expect(activityCard).toBeInTheDocument();
    });
});

describe('Changing reporting period to Daily updates the cards', () => {
    it('changes Work card to 5hrs when Daily report period is clicked', () => {
        render(<App />);
        clickMenu(/daily/i);
        const activityResult = screen.getByTestId('work-card');
        expect(activityResult).toContainHTML('5hrs');
        expect(activityResult).toContainHTML('Yesterday - 7hrs');
    });

    it('changes Play card to 1hrs when Daily report period is clicked', () => {
        render(<App />);
        clickMenu(/daily/i);
        const activityResult = screen.getByTestId('play-card');
        expect(activityResult).toContainHTML('1hrs');
        expect(activityResult).toContainHTML('Yesterday - 2hrs');
    });

    it('changes Study card to 0hrs when Daily report period is clicked', () => {
        render(<App />);
        clickMenu(/daily/i);
        const activityResult = screen.getByTestId('study-card');
        expect(activityResult).toContainHTML('0hrs');
        expect(activityResult).toContainHTML('Yesterday - 1hrs');
    });

    it('changes Exercise card to 1hrs when Daily report period is clicked', () => {
        render(<App />);
        clickMenu(/daily/i);
        const activityResult = screen.getByTestId('exercise-card');
        expect(activityResult).toContainHTML('1hr');
        expect(activityResult).toContainHTML('Yesterday - 1hrs');
    });

    it('changes Social card to 1hrs when Daily report period is clicked', () => {
        render(<App />);
        clickMenu(/daily/i);
        const activityResult = screen.getByTestId('social-card');
        expect(activityResult).toContainHTML('1hrs');
        expect(activityResult).toContainHTML('Yesterday - 3hrs');
    });

    it('changes Self Care card to 0hrs when Daily report period is clicked', () => {
        render(<App />);
        clickMenu(/daily/i);
        const activityResult = screen.getByTestId('self-care-card');
        expect(activityResult).toContainHTML('0hr');
        expect(activityResult).toContainHTML('Yesterday - 1hrs');
    });
});

describe('Changing reporting period to Weekly updates the cards', () => {
    it('changes Work card to 32hrs when Weekly report period is clicked', () => {
        render(<App />);
        clickMenu(/weekly/i);
        const activityResult = screen.getByTestId('work-card');
        expect(activityResult).toContainHTML('32hrs');
        expect(activityResult).toContainHTML('Last Week - 36hrs');
    });

    it('changes Play card to 10hrs when Weekly report period is clicked', () => {
        render(<App />);
        clickMenu(/weekly/i);
        const activityResult = screen.getByTestId('play-card');
        expect(activityResult).toContainHTML('10hrs');
        expect(activityResult).toContainHTML('Last Week - 8hrs');
    });

    it('changes Study card to 4hrs when Weekly report period is clicked', () => {
        render(<App />);
        clickMenu(/weekly/i);
        const activityResult = screen.getByTestId('study-card');
        expect(activityResult).toContainHTML('4hrs');
        expect(activityResult).toContainHTML('Last Week - 7hrs');
    });

    it('changes Exercise card to 4hrs when Weekly report period is clicked', () => {
        render(<App />);
        clickMenu(/weekly/i);
        const activityResult = screen.getByTestId('exercise-card');
        expect(activityResult).toContainHTML('4hrs');
        expect(activityResult).toContainHTML('Last Week - 5hrs');
    });

    it('changes Social card to 5hrs when Weekly report period is clicked', () => {
        render(<App />);
        clickMenu(/weekly/i);
        const activityResult = screen.getByTestId('social-card');
        expect(activityResult).toContainHTML('5hrs');
        expect(activityResult).toContainHTML('Last Week - 10hrs');
    });

    it('changes Self Care card to 2hrs when Weekly report period is clicked', () => {
        render(<App />);
        clickMenu(/weekly/i);
        const activityResult = screen.getByTestId('self-care-card');
        expect(activityResult).toContainHTML('2hrs');
        expect(activityResult).toContainHTML('Last Week - 2hrs');
    });
});

describe('Changing reporting period to Monthly updates the cards', () => {
    it('changes Work card to 103hrs when Monthly report period is clicked', () => {
        render(<App />);
        clickMenu(/monthly/i);
        const activityResult = screen.getByTestId('work-card');
        expect(activityResult).toContainHTML('103hrs');
        expect(activityResult).toContainHTML('Last Month - 128hrs');
    });

    it('changes Play card to 23hrs when Monthly report period is clicked', () => {
        render(<App />);
        clickMenu(/monthly/i);
        const activityResult = screen.getByTestId('play-card');
        expect(activityResult).toContainHTML('23hrs');
        expect(activityResult).toContainHTML('Last Month - 29hrs');
    });

    it('changes Study card to 13hrs when Monthly report period is clicked', () => {
        render(<App />);
        clickMenu(/monthly/i);
        const activityResult = screen.getByTestId('study-card');
        expect(activityResult).toContainHTML('13hrs');
        expect(activityResult).toContainHTML('Last Month - 19hrs');
    });

    it('changes Exercise card to 11hrs when Monthly report period is clicked', () => {
        render(<App />);
        clickMenu(/monthly/i);
        const activityResult = screen.getByTestId('exercise-card');
        expect(activityResult).toContainHTML('11hrs');
        expect(activityResult).toContainHTML('Last Month - 18hrs');
    });

    it('changes Social card to 21hrs when Monthly report period is clicked', () => {
        render(<App />);
        clickMenu(/monthly/i);
        const activityResult = screen.getByTestId('social-card');
        expect(activityResult).toContainHTML('21hrs');
        expect(activityResult).toContainHTML('Last Month - 23hrs');
    });

    it('changes Self Care card to 7hrs when Monthly report period is clicked', () => {
        render(<App />);
        clickMenu(/monthly/i);
        const activityResult = screen.getByTestId('self-care-card');
        expect(activityResult).toContainHTML('7hrs');
        expect(activityResult).toContainHTML('Last Month - 11hrs');
    });
});
