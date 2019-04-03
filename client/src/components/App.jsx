import React from 'react';
import PricePerNight from './PricePerNight';
import Dates from './Dates';
import Guests from './Guests';
import Availability from './Availability';
import BookingDetails from './BookingDetails';

// import Calendar from 'react-calendar/dist/entry.nostyle';

// import 'react-dates/initialize';
// import { DateRangePicker, DayPickerRangeController } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

// import { START_DATE } from 'react-dates/constants.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  handleDatesChange({ startDate, endDate }) {
    console.log(startDate, endDate);
    this.setState({ startDate, endDate });
  }

  clearDates() {
    this.setState({ startDate: null, endDate: null });
  }

  render() {
    return (
      <div>
        <Availability
          handleDatesChange={this.handleDatesChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          clearDates={this.clearDates}
        />
        <div>a</div>
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
        <BookingDetails
          handleDatesChange={this.handleDatesChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
      </div>
    );
  }
}

export default App;
