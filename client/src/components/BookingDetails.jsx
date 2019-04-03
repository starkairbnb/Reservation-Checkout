import React from 'react';

import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { START_DATE } from 'react-dates/constants.js';

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DateRangePicker
        startDate={this.props.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        startDatePlaceholderText="Check-in"
        endDatePlaceholderText="Checkout"
        minimumNights={3}
        numberOfMonths={1}
        endDate={this.props.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={this.props.handleDatesChange}
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => {
          console.log(focusedInput);
          this.setState({ focusedInput });
        }} // PropTypes.func.isRequired,
      />
    );
  }
}

export default BookingDetails;
