import React from 'react';

class Dates extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <span>
            Dates
          </span>
        </div>
        <div>
          <span>
            Check In
          </span>
          <span>
            →
          </span>
          <span>
            Check Out
          </span>
        </div>
      </div>
    )
  }
}

export default Dates;