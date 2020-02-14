import React from 'react'

export default function Header () {
  return (
    <header className="header" id="header">
      <div className="currencies">
        <label className="container">
          USD
          <input type="radio" defaultChecked="checked" name="radio"/>
            <span className="checkmark">
            </span>
        </label>
        <label className="container">
          EUR
          <input type="radio" name="radio"/>
            <span className="checkmark">
            </span>
        </label>
        <label className="container">
          GBP
          <input type="radio" name="radio"/>
            <span className="checkmark">
            </span>
        </label>
        <label className="container">
          PLN
          <input type="radio" name="radio"/>
            <span className="checkmark">
            </span>
        </label>
      </div>
      <div className="amount">
        Amount: 
        <input type="text"/>
      </div>
    </header>
  )
}