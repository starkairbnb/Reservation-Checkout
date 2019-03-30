import React from 'react';
import PricePerNight from './PricePerNight';
import Dates from './Dates';
import Guests from './Guests';

import Calendar from 'react-calendar/dist/entry.nostyle';

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
        <Calendar />
      </div>
    );
  }
}

export default App;
