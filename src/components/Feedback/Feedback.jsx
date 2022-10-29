import React, { useState }  from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from '../Section/Section';
import Notification from 'components/Notification/Notification';

import './Feedback.css';

//class Feedback extends React.Component
const Feedback = () => {
    // static defaultProps = {
    //     initialValue: 0,
    // };

    // static propTypes = {
    //     //
    // };

// обьявляем начальное сост
    // state = {
    //     good: 0,
    //     neutral: 0,
    //     bad: 0
    // };
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

 
   const onLeaveFeedback = (key) => {
        switch (key) {
            case "good":
                return setGood((prev) => prev + 1);
            case "neutral": 
                return setNeutral((prev) => prev + 1);
            case "bad":
                return setBad((prev) => prev + 1);
            default:
                return;
        }
    }

    const countTotalFeedback = () => {
       // const { good, neutral, bad } = this.state;
      //  return good + neutral + bad;
        // return Object.values(this.state).reduce((total, item) => total + item, 0);
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        // const { good, neutral, bad } = this.state;
        // const total = good + neutral + bad;
        const total = countTotalFeedback();
        if (total === 0) {
            return 0;
        }       
        const calc = Math.round((good / total * 100))
        return calc;
    }

    const resetStatistics = () => {
        setGood(0);
        setNeutral(0);
        setBad(0);
    };

    // render() {
      
        const total = countTotalFeedback();
    const countPositivePercentage = countPositiveFeedbackPercentage();
    const options = { good, neutral, bad }
       // const onLeaveFeedback = [this.handleGood, this.handleNeutral, this.handleBad]
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options}
                        onLeaveFeedback={onLeaveFeedback}
                        // onGood={this.handleGood} onNeutral={this.handleNeutral} onBad={this.handleBad}
                    />
                </Section>

                <Section title="Statistics">   
                    {total === 0 ? (
                        <Notification message={"There is no feedback"} />
                    ) : (
                        < Statistics good={good}
                                neutral={neutral}
                                bad={bad}
                                totalV={total}
                                positivePercentage={countPositivePercentage} 
                                reset={resetStatistics}
                                
                    /> )   }
                    
                </Section>    
        </div>        
        );
    }


export default Feedback;