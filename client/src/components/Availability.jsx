import React from 'react';

import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { START_DATE } from 'react-dates/constants.js';

class Availability extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: START_DATE };
  }

  render() {
    return (
      <div>
        <div>Availability</div>
        <div>
          <span>min stay</span> <span>..last updated</span>{' '}
          <button onClick={this.props.clearDates}>Clear Dates</button>
        </div>
        <div>
          <DayPickerRangeController
            startDate={this.props.startDate} // momentPropTypes.momentObj or null,
            endDate={this.props.endDate} // momentPropTypes.momentObj or null,
            numberOfMonths={2}
            onDatesChange={this.props.handleDatesChange} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => {
              console.log(focusedInput);
              if (focusedInput === null) {
                this.setState({ focusedInput: START_DATE });
              } else {
                this.setState({ focusedInput });
              }
            }} // PropTypes.func.isRequired,
          />
        </div>
      </div>
    );
  }
}

export default Availability;
