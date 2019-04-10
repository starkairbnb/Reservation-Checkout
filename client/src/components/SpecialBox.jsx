import React from 'react';
import '../styles/special_styles.css';

class SpecialBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let title, description, img;
    if (this.props.popular) {
      title = 'This is a rare find.';
      description = this.props.owner + "'s place is usually booked.";
      img =
        'https://a0.muscache.com/airbnb/static/page3/icon-uc-diamond-86ef3d6403e5b6747d1e3a97ed840b6d.gif';
    } else {
      title = 'This home is on people’s minds.';
      description = `It's been viewed ${
        this.props.recentViews
      } times in the past week.`;
      img =
        'https://a0.muscache.com/airbnb/static/page3/icon-uc-light-bulb-b34f4ddc543809b3144949c9e8cfcc8d.gif';
    }

    return (
      <div className="special-container">
        <div className="bottom-border" />
        <div className="special-flex">
          <div className="special-text">
            <div className="special-title">{title} </div>
            <div className="special-detail">{description} </div>
          </div>
          <img src={img} style={{ height: '48px', width: '48px' }} />
        </div>
      </div>
    );
  }
}

export default SpecialBox;
