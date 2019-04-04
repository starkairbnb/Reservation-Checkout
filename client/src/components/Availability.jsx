import React from 'react';

import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { START_DATE } from 'react-dates/constants.js';

import '../styles/availability_calendar_override.css';

class Availability extends React.Component {
  constructor(props) {
    super(props);
    var date = new Date();
    date.setDate(date.getDate() - 1);
    this.state = { focusedInput: START_DATE, yesterday: date };
  }

  render() {
    return (
      <div className="availability-container">
        <div style={{ marginBottom: '16px' }}>Availability</div>
        <div>
          {this.props.startDate !== undefined &&
            this.props.startDate !== null && (
              <span>
                {this.props.minStay +
                  (this.props.minStay === 1
                    ? ' night minimum stay · '
                    : ' nights minimum stay · ')}
              </span>
            )}
          <span>
            Updated{' '}
            {this.props.daysSinceUpdated +
              (this.props.minStay === 1 ? ' day ago' : ' days ago')}
          </span>{' '}
          {this.props.startDate !== undefined && this.props.startDate !== null && (
            <button
              onClick={() => {
                this.setState(
                  { focusedInput: START_DATE },
                  this.props.clearDates
                );
              }}
            >
              Clear Dates
            </button>
          )}
        </div>
        <div>
          <DayPickerRangeController
            startDate={this.props.startDate} // momentPropTypes.momentObj or null,
            endDate={this.props.endDate} // momentPropTypes.momentObj or null,
            numberOfMonths={2}
            onDatesChange={this.props.handleDatesChange} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => {
              if (focusedInput === null) {
                this.setState({ focusedInput: START_DATE });
              } else {
                this.setState({ focusedInput });
              }
            }} // PropTypes.func.isRequired,
            noBorder={true}
            isOutsideRange={data => {
              if (
                data._d < this.props.startDate ||
                data._d < this.state.yesterday
              ) {
                return true;
              } else {
                return false;
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Availability;
