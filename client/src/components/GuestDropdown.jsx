// --------- Widget1.css ---------------
// .button {
//   border-radius: 4px;
//   background-color: LightCyan;
// }

import React from 'react';

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: 1,
      children: 0,
      infants: 0
    };
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <span>Adults</span>
            <button>-</button>
            <span>{this.state}</span>
            <button>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestDropdown;
