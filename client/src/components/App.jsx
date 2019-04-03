import React from 'react';
import Availability from './Availability';
import BookingDetails from './BookingDetails';

import app_styles from '../styles/app_styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  handleDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  clearDates() {
    this.setState({ startDate: null, endDate: null });
  }

  render() {
    return (
      <div className="main-body">
        <div className="flex-container">
          <div className="spacing-above">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <Availability
              handleDatesChange={this.handleDatesChange}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              clearDates={this.clearDates}
            />
          </div>
          <BookingDetails
            handleDatesChange={this.handleDatesChange}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
        </div>
        <div className="spacing-after">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    );
  }
}

export default App;
