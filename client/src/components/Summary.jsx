import React from 'react';
import '../styles/summary_styles.css';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let nightsTotal = this.props.nightlyRate * this.props.numNights;
    let serviceFee = Math.round(
      this.props.serviceFeeRate *
        (this.props.nightlyRate * this.props.numNights + this.props.cleaningFee)
    );
    let taxes = Math.round(
      this.props.taxRate * (nightsTotal + serviceFee + this.props.cleaningFee)
    );
    return (
      <div className="summary-container">
        TODO: UPDATE numNights
        {this.props.nightlyRate && (
          <div className="nights-summary-container">
            <div className="nights-row">
              <div className="nights-left">
                <span>
                  ${this.props.nightlyRate} x {this.props.numNights} nights
                </span>
              </div>
              <div className="nights-right">${nightsTotal}</div>
            </div>
            <div className="summary-border" />
          </div>
        )}
        {this.props.cleaningFee && (
          <div className="cleaning-fee-container">
            <div className="cleaning-row">
              <div className="cleaning-left">
                <span>Cleaning fee</span>
              </div>
              <div className="cleaning-right">${this.props.cleaningFee}</div>
            </div>
            <div className="summary-border" />
          </div>
        )}
        {this.props.serviceFeeRate && (
          <div className="service-fee-container">
            <div className="service-row">
              <div className="service-left">
                <span>Service fee</span>
              </div>
              <div className="service-right">${serviceFee}</div>
            </div>
            <div className="summary-border" />
          </div>
        )}
        {this.props.taxRate && (
          <div className="tax-container">
            <div className="tax-row">
              <div className="tax-left">
                <span>Occupancy taxes and fees</span>
              </div>
              <div className="tax-right">${taxes}</div>
            </div>
            <div className="summary-border" />
          </div>
        )}
      </div>
    );
  }
}
export default Summary;

//Service fee: This helps us run our platform and offer services like 24/7 support on your trip.

//Occupancy taxes and fees: Accommodations Tax (San Francisco) ------Learn more
