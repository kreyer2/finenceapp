import React from 'react'
import { connect } from 'react-redux';
import { changeAmount, chooseCurrency } from "../actions/currency__action";

function Header ({amount, chooseCurrency, changeAmount}) {
  const handleCurrency = (e) => chooseCurrency(e.target.id);

  const handleInput = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      changeAmount(e.target.value)
    }
  };

  return (
    <header className="header" id="header">
      <div className="currencies">
        <label className="container">
          <input type="radio" defaultChecked="checked"
                 name="radio"
                 id="usd"
                 onChange={handleCurrency}/>
            <span className="checkmark">
            </span>
          USD
        </label>
        <label className="container">
          <input type="radio"
                 name="radio"
                 id="eur"
                 onChange={handleCurrency}/>
            <span className="checkmark">
            </span>
          EUR
        </label>
        <label className="container">
          <input type="radio"
                 name="radio"
                 id="gbp"
                 onChange={handleCurrency}/>
            <span className="checkmark">
            </span>
          GBP
        </label>
        <label className="container">
          <input type="radio"
                 name="radio"
                 id="pln"
                 onChange={handleCurrency}/>
            <span className="checkmark">
            </span>
          PLN
        </label>
      </div>
      <div className="amount">
        Amount:
        <input type="text"
               defaultValue={0}
               value={amount}
               onChange={handleInput}/>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    data: state.currency.amount
  }
};

const mapDispatchToProps = dispatch => {
  return {
    chooseCurrency: type => dispatch(chooseCurrency(type)),
    changeAmount: amount => dispatch(changeAmount(amount)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)