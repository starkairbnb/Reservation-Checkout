import React from 'react';
import Guests from './Guests.jsx';
import OutsideClickHandler from 'react-outside-click-handler';
import '../styles/guest_styles.css';

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      open: false
    };
  }

  render() {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          this.setState({ open: false });
        }}
      >
        <div className="guests-container">
          <button
            className="guests-button"
            onClick={() => this.setState({ open: !this.state.open })}
          >
            2 Guests
          </button>
          {this.state.open && (
            <div className="guests-buttons-container">
              <div>
                Hi;alkskdjf;laskdjf;al kdjf;laksdjf;laksjdf; laksjdf;laks
                jf;laksdjf;alksdjf;alskfja;sldkjfa;slkdfja;slkdjf;klj
              </div>
            </div>
          )}
          <div>This is a sibling to my conditional stuff</div>
        </div>
      </OutsideClickHandler>
    );
  }
}

export default GuestDropdown;
