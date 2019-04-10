import React from 'react';

class SpecialBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let title, description, img;
    if (this.props.popular) {
      title = 'This is a rare find.';
      description = this.props.owner + "'s place is usually booked.";
    }

    return (
      <div className="special-container">
        <div className="bottom-border" />
        <div className="special-flex">
          <div className="special-text">
            <div className="special-title">{title}</div>
            <div className="special-detail">{description}</div>
          </div>
          <div>Here Pic</div>
        </div>
      </div>
    );
  }
}

export default SpecialBox;
