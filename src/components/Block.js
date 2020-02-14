import React from 'react';

export default function Block({exchangedate, rate, amount, cc}) {
  return (
    <div className="time-point__block">
      <div className="date">
        {exchangedate}
      </div>
      <div className="rate">
        {rate.toFixed(2)} {cc}
      </div>
      <div className="result">
        {(rate.toFixed(2) * amount).toFixed(2)} UAH
      </div>
    </div>
  )
}