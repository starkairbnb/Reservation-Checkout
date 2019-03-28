import React from 'react';

class PricePerNight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <span>
            ${Math.floor(Math.random() * 1000) + 80 } 
          </span>
        </div>
        <div>
          <span>
            per night
          </span>
        </div>
      </div>
    )
  }
}

export default PricePerNight;