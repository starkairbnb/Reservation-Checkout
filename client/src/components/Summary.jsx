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

    let total = taxes + serviceFee + this.props.cleaningFee + nightsTotal;

    return (
      <div className="summary-container">
        {this.props.nightlyRate && (
          <div className="nights-summary-container">
            <div className="nights-row">
              <div className="nights-left">
                <span>
                  ${this.props.nightlyRate} x {this.props.numNights} nights
                </span>
                <span>icon</span>
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
                <span>icon</span>
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
                <span>icon</span>
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
                <span>icon</span>
              </div>
              <div className="tax-right">${taxes}</div>
            </div>
            <div className="summary-border" />
          </div>
        )}
        <div className="total-container">
          <div className="total-row">
            <div className="total-left">Total</div>
            <div className="total-right">${total}</div>
          </div>
          <div className="summary-border" />
        </div>
        <div className="payment-details-container">
          <span className="payment-details-text">PAYMENT DETAILS</span>
          <span className="payment-details-icon">icon</span>
        </div>
        <div className="due-now-container">
          <div className="due-now-text">Due now</div>
          <div className="due-now">${(total / 2).toFixed(2)}</div>
        </div>
        <div className="due-later-container">
          <div className="due-later-left">
            <span className="due-later-text">Due on</span>
            <span>icon</span>
          </div>
          <div className="due-later-">${(total / 2).toFixed(2)}</div>
        </div>
      </div>
    );
  }
}
export default Summary;

//Service fee: This helps us run our platform and offer services like 24/7 support on your trip.

//Occupancy taxes and fees: Accommodations Tax (San Francisco) ------Learn more
