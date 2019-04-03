import React from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import '../styles/bookings-styles.css';

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bookings-container">
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
            this.setState({ focusedInput });
          }} // PropTypes.func.isRequired,
        />
      </div>
    );
  }
}

export default BookingDetails;
