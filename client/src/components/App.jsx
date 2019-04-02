import React from 'react';
import PricePerNight from './PricePerNight';
import Dates from './Dates';
import Guests from './Guests';

// import Calendar from 'react-calendar/dist/entry.nostyle';

import 'react-dates/initialize';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <PricePerNight />
        </div>
        <div>
          <Dates />
        </div>
        <div>
          <Guests />
        </div>
        <div>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              console.log(startDate, endDate);
              this.setState({ startDate, endDate });
            }} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>
      </div>
    );
  }
}

export default App;
