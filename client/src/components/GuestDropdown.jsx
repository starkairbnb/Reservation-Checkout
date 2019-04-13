import React from 'react';
import Guests from './Guests.jsx';
import OutsideClickHandler from 'react-outside-click-handler';
import '../styles/guest_styles.css';

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Adults: 1,
      Children: 0,
      Infants: 0,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type, dif) {
    this.setState({ [type]: this.state[type] + dif });
  }

  render() {
    let carrot = (
      <svg
        className={`carrot${this.state.open ? ' open_guests' : ''}`}
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z"
          fillRule="evenodd"
        />
      </svg>
    );
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
            <div className="guests-button-flex">
              <div className="guests-button-text">
                {this.state.Adults + this.state.Children} Guests
                {this.state.Infants > 0
                  ? `, ${this.state.Infants} infants`
                  : ''}
              </div>
              {carrot}
            </div>
          </button>
          {this.state.open && (
            <div className="guests-buttons-container">
              <div className="guests-component-container">
                <Guests
                  guestsType="Adults"
                  currentGuests={this.state.Adults + this.state.Children}
                  typeCount={this.state.Adults}
                  maxOfType={this.props.maxGuests - this.state.Children}
                  minOfType={1}
                  handleChange={this.handleChange}
                />
                <Guests
                  guestsType="Children"
                  description="Ages 2-12"
                  typeCount={this.state.Children}
                  maxOfType={this.props.maxGuests - this.state.Adults}
                  minOfType={0}
                  handleChange={this.handleChange}
                />
                <Guests
                  guestsType="Infants"
                  description="Under 2"
                  typeCount={this.state.Infants}
                  maxOfType={5}
                  minOfType={0}
                  handleChange={this.handleChange}
                />
              </div>
              <div className="max-guests">
                {`${
                  this.props.maxGuests
                } guests maximum. Infants don’t count toward the number of guests.`}
              </div>
              <div
                className="close-guests-button"
                onClick={() => this.setState({ open: false })}
              >
                Close
              </div>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    );
  }
}

export default GuestDropdown;
