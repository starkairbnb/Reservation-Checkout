import React from 'react';

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
        {this.props.nightlyRate && (
          <div className="nights-summary-container">
            <div className="nights-left">
              {this.props.nightlyRate} x {this.props.numNights} nights
            </div>
            <div className="nights-right">${nightsTotal}</div>
          </div>
        )}
        {this.props.cleaningFee && (
          <div className="cleaning-fee-container">
            <div className="cleaning-left">Cleaning fee </div>
            <div className="cleaning-right">${this.props.cleaningFee}</div>
          </div>
        )}
        {this.props.serviceFeeRate && (
          <div className="service-fee-container">
            <div className="service-left">Service fee</div>
            <div className="service-right">${serviceFee}</div>
          </div>
        )}
        {this.props.taxRate && (
          <div className="tax-container">
            <div className="tax-left">Occupancy taxes and fees</div>
            <div className="tax-right">${taxes}</div>
          </div>
        )}
      </div>
    );
  }
}
export default Summary;

//Service fee: This helps us run our platform and offer services like 24/7 support on your trip.

//Occupancy taxes and fees: Accommodations Tax (San Francisco) ------Learn more
