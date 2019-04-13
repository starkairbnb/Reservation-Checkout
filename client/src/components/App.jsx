import React from 'react';
import ReactDOM from 'react-dom';
import Availability from './Availability';
import BookingDetails from './BookingDetails';
import Axios from 'axios';

import app_styles from '../styles/app_styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollHeight: 0
    };
    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  componentDidMount() {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    };
    Axios.get('/api/reservations/' + getRandomIntInclusive(1, 100))
      .then(
        ({
          data: {
            avgRating,
            cleaningFee,
            maxGuests,
            minStay,
            nightlyRate,
            owner,
            popular,
            recentViews,
            reviewsCount,
            serviceFeeRate,
            taxRate,
            daysSinceUpdated
          }
        }) => {
          this.setState({
            avgRating,
            cleaningFee,
            maxGuests,
            minStay,
            nightlyRate,
            owner,
            popular,
            recentViews,
            reviewsCount,
            serviceFeeRate,
            taxRate,
            daysSinceUpdated
          });
        }
      )
      // .then(() => {
      //   window.addEventListener('scroll', () => {
      //     this.setState({ scrollHeight: window.scrollY });
      //   });
      // })
      .catch(err => console.log(err));
  }

  componentDidUpdate() {
    ReactDOM.render(
      <BookingDetails
        handleDatesChange={this.handleDatesChange}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        avgRating={this.state.avgRating}
        cleaningFee={this.state.cleaningFee}
        maxGuests={this.state.maxGuests}
        minStay={this.state.minStay}
        nightlyRate={this.state.nightlyRate}
        owner={this.state.owner}
        popular={this.state.popular}
        recentViews={this.state.recentViews}
        reviewsCount={this.state.reviewsCount}
        serviceFeeRate={this.state.serviceFeeRate}
        taxRate={this.state.taxRate}
        clearDates={this.clearDates}
      />,
      document.getElementById('bookings-master-container')
    );
  }

  handleDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  clearDates() {
    this.setState({ startDate: null, endDate: null });
  }

  render() {
    return (
      <div className="main-body-reservations">
        <div className="reservation-container">
          <div className="left-col">
            <Availability
              handleDatesChange={this.handleDatesChange}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              clearDates={this.clearDates}
              minStay={this.state.minStay}
              daysSinceUpdated={this.state.daysSinceUpdated}
            />
          </div>
          <div
            className={
              this.state.scrollHeight >= 330
                ? 'booking-details-container booking-details-container-sticky'
                : 'booking-details-container'
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
