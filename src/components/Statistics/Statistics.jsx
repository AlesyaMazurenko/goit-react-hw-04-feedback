import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, totalV, positivePercentage}) => (
    <div>
       {/* <h2>Statistics</h2> */}
        <ul className='Statistic__list'>
            <li className='Statistic__item'>Good: {good}</li>
            <li className='Statistic__item'>Neutral: {neutral}</li>
            <li className='Statistic__item'>Bad: {bad}</li>
            <li className='Statistic__item'>Total: {totalV}</li>
            <li className='Statistic__item'>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
);

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalV: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
