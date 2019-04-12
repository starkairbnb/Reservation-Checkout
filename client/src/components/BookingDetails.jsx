import React from 'react';
import Summary from './Summary.jsx';
import SpecialBox from './SpecialBox.jsx';
import GuestDropdown from './GuestDropdown.jsx';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import '../styles/bookings-styles.css';
import '../styles/bookings_calendar_override.css';

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let starz = (
      <div className="stars">
        <img
          src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
          alt=""
          height="12px"
          width="12px"
        />
        <img
          src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
          alt=""
          height="12px"
          width="12px"
        />
        <img
          src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
          alt=""
          height="12px"
          width="12px"
        />
        <img
          src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
          alt=""
          height="12px"
          width="12px"
        />
        {this.props.avgRating === 4.5 && (
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/half+star+icon.png"
            alt=""
            height="11px"
            width="12px"
            margin-top=".5px"
          />
        )}
        {this.props.avgRating === 5 && (
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
            alt=""
            height="12px"
            width="12px"
          />
        )}
      </div>
    );
    let reportIcon = (
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        className="reportIcon"
      >
        <path
          d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
          fillRule="evenodd"
        />
      </svg>
    );

    return (
      <div className="bookings-container">
        <div className="summary-wrapper">
          <div className="summary-container">
            <div className="price-per-night">
              <span className="money">${this.props.nightlyRate} </span>
              <span className="per-night">per night</span>
            </div>
            {this.props.reviewsCount > 0 && (
              <button
                className="ratings"
                onClick={() => {
                  document.getElementById('reviews').scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {starz}
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
            <GuestDropdown maxGuests={this.props.maxGuests} />
          </div>
          <div className="summary-cont">
            {this.props.startDate && this.props.endDate && (
              <Summary
                nightlyRate={this.props.nightlyRate}
                serviceFeeRate={this.props.serviceFeeRate}
                cleaningFee={this.props.cleaningFee}
                taxRate={this.props.taxRate}
                numNights={this.props.endDate.diff(
                  this.props.startDate,
                  'days'
                )}
              />
            )}
          </div>

          <div className="button-container">
            <button className="book-button">Book</button>
            <div className="reassurance">You won't be charged yet</div>
          </div>
          <SpecialBox
            owner={this.props.owner}
            popular={this.props.popular}
            recentViews={this.props.recentViews}
          />
        </div>
        <div className="reporting-container">
          <div className="reporting-cell">
            <button className="reporting-flex">
              <div>{reportIcon}</div>
              <div className="report">Report this listing</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetails;
