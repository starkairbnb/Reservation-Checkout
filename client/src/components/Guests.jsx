import React from 'react';
import Dropdown from './GuestDropdown'

class Guests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guests: 1,
      infant: 0
    };
  }

  render() {
    return (
      <div>
        <div>
          <button>
            {this.state.guests} guests
          </button>
        </div>
      </div>
    )
  }
}

export default Guests;