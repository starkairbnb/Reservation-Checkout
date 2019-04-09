import React from 'react';
import Summary from './Summary.jsx';

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
    console.log(this.props);

    return (
      <div className="bookings-container">
        <div className="summary-wrapper">
          <div className="summary-container">
            <div className="price-per-night">
              <span className="money">${this.props.nightlyRate} </span>
              <span className="per-night">per night</span>
            </div>
            {this.props.reviewsCount > 0 && (
              <button className="ratings">
                <span className="stars">5starz </span>
                <span className="ratings-count">{this.props.reviewsCount}</span>
              </button>
            )}
            <div className="upper-border" />
          </div>
          <div className="date-picker-container">
            <div className="dates-header">Dates</div>
            <DateRangePicker
              startDate={this.props.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              startDatePlaceholderText="Check-in"
              endDatePlaceholderText="Checkout"
              minimumNights={this.props.minStay}
              numberOfMonths={1}
              endDate={this.props.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={this.props.handleDatesChange}
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => {
                this.setState({ focusedInput });
              }} // PropTypes.func.isRequired,
              renderCalendarInfo={() => {
                if (this.props.startDate || this.props.endDate) {
                  return (
                    <div className="clears-dates-container">
                      <button
                        className="clears-dates-bookings"
                        onClick={this.props.clearDates}
                      >
                        Clear Dates
                      </button>
                    </div>
                  );
                }
              }}
            />
          </div>
          <div className="guest-picker-container">
            <div className="guests-header">Guests</div>
            <div>Guest picker react component</div>
          </div>
          {this.props.startDate && this.props.endDate && (
            <Summary
              nightlyRate={this.props.nightlyRate}
              serviceFeeRate={this.props.serviceFeeRate}
              cleaningFee={this.props.cleaningFee}
              taxRate={this.props.taxRate}
              numNights={4}
            />
          )}

          <div className="button-container">
            <button>Request to book</button>
            <div>You won't be charged yet</div>
          </div>

          <div className="bottom-border" />
          <div className="special-container">
            <div className="special-text">
              <div className="special-title">
                This home is on people's minds{' '}
              </div>
              <div className="special-detail"> It's been viewed 500+ times</div>
            </div>
            <div>Here be picture</div>
          </div>
        </div>
        <div>reporting goes here</div>
      </div>
    );
  }
}

export default BookingDetails;
