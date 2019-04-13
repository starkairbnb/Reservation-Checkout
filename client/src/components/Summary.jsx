import React from 'react';
import '../styles/summary_styles.css';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let nightsTotal = this.props.nightlyRate * this.props.numNights;

    let serviceFee = Math.round(
      this.props.serviceFeeRate *
        (this.props.nightlyRate * this.props.numNights + this.props.cleaningFee)
    );

    let taxes = Math.round(
      this.props.taxRate * (nightsTotal + serviceFee + this.props.cleaningFee)
    );

    let total = taxes + serviceFee + this.props.cleaningFee + nightsTotal;

    let icon = (
      <svg
        className="icon"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Learn more"
        focusable="false"
      >
        <path
          d="m12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm0 23c-6.07 0-11-4.92-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm4.75-14c0 1.8-.82 2.93-2.35 3.89-.23.14-1 .59-1.14.67-.4.25-.51.38-.51.44v2a .75.75 0 0 1 -1.5 0v-2c0-.74.42-1.22 1.22-1.72.17-.11.94-.55 1.14-.67 1.13-.71 1.64-1.41 1.64-2.61a3.25 3.25 0 0 0 -6.5 0 .75.75 0 0 1 -1.5 0 4.75 4.75 0 0 1 9.5 0zm-3.75 10a1 1 0 1 1 -2 0 1 1 0 0 1 2 0z"
          fillRule="evenodd"
        />
      </svg>
    );

    let icon2 = (
      <svg
        className="icon"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Learn more"
        focusable="false"
      >
        <path
          d="m 17 9 c 0 -4.42 -3.58 -8 -8 -8 s -8 3.58 -8 8 s 3.58 8 8 8 s 8 -3.58 8 -8 m 1 0 c 0 4.97 -4.03 9 -9 9 s -9 -4.03 -9 -9 s 4.03 -9 9 -9 s 9 4.03 9 9 m -9 -5.25 c -0.69 0 -1.25 0.56 -1.25 1.25 s 0.56 1.25 1.25 1.25 s 1.25 -0.56 1.25 -1.25 s -0.56 -1.25 -1.25 -1.25 m 0 4.25 c 0.55 0 1 0.45 1 1 v 5 c 0 0.55 -0.45 1 -1 1 s -1 -0.45 -1 -1 v -5 c 0 -0.55 0.45 -1 1 -1"
          fillRule="evenodd"
        />
      </svg>
    );
    let icon3 = (
      <svg
        className="icon3"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Close"
        focusable="false"
      >
        <path
          d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
          fillRule="evenodd"
        />
      </svg>
    );

    return (
      <div className="summary-container">
        {this.props.nightlyRate && (
          <div className="nights-summary-container">
            <div className="nights-row">
              <div className="nights-left">
                <div className="title">
                  ${this.props.nightlyRate} x {this.props.numNights} nights
                </div>
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
                <div className="title">Cleaning fee </div>
                <button className="question tooltip-summary">
                  {icon}
                  <span className="tooltiptext cleaning-tip">
                    One-time fee charged by host to cover the cost of cleaning
                    their space.
                    <div className="x-button" tabIndex="-1">
                      {icon3}
                    </div>
                  </span>
                </button>
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
                <div className="title">Service fee</div>
                <button className="question tooltip-summary">
                  {icon}
                  <span className="tooltiptext service-tip">
                    This helps us run our platform and offer services like 24/7
                    support on your trip.
                    <div className="x-button" tabIndex="-1">
                      {icon3}
                    </div>
                  </span>
                </button>
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
                <div className="title">Occupancy taxes and fees</div>
                <button className="question tooltip-summary">
                  {icon}
                  <span className="tooltiptext tax-tip">
                    This is a municipal accomodations tax necessary for
                    ShareBnB.
                    <div className="x-button" tabIndex="-1">
                      {icon3}
                    </div>
                  </span>
                </button>
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
          <span className="payment-details-icon">{icon2}</span>
        </div>
        <div className="due-now-container">
          <div className="due-now-text">Due now</div>
          <div className="due-now">${(total / 2).toFixed(2)}</div>
        </div>
        <div className="due-later-container">
          <div className="due-later-left">
            <div className="due-later-text">Due on</div>
            <button className="question tooltip-summary">
              {icon}
              <span className="tooltiptext due-tip">
                If you prefer to pay the full reservation amount now, you can
                choose this option in Confirm and pay.
                <div className="x-button" tabIndex="-1">
                  {icon3}
                </div>
              </span>
            </button>
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
