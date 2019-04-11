import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.text = (
      <div className="guest-text-area">
        <div className="guestsType">{this.props.guestsType}</div>
        {this.props.description && (
          <div className="guestsDesc">{this.props.description}</div>
        )}
      </div>
    );
    this.subtract = (
      <div className="subtract-icon">
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-label="subtract"
          focusable="false"
        >
          <rect height="2" rx="1" width="12" x="6" y="11" />
        </svg>
      </div>
    );
    this.add = (
      <div className="add-icon">
        <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false">
          <rect height="2" rx="1" width="12" x="6" y="11" />
          <rect height="12" rx="1" width="2" x="11" y="6" />
        </svg>
      </div>
    );
    this.button = (
      <div className="guest-button-container">
        <button className="subtract-button">{this.subtract}</button>
        <div className="typeCount">{this.props.typeCount}</div>
        <button className="add-button">{this.add}</button>
      </div>
    );
  }

  render() {
    return (
      <div className="single-guest">
        {this.text}
        {this.button}
      </div>
    );
  }
}

export default Guests;
