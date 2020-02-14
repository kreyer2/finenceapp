import React from "react";
import {connect} from 'react-redux';
import { deleteFilter, setFilter } from "../actions/currency__action";

function Sidebar({ currencyType, setFilter, deleteFilter }) {
  const handleChecker = (e) => {
    const id = e.target.id;
    //If checkbox is checked, we pass ID to reducer as filter type
    if (e.target.checked) return setFilter(id, currencyType);

    //In another case, we pass ID to delete filter
    return deleteFilter(id, currencyType)
  };

  return (
    <aside className="sidebar" id="sidebar">
      <div className="time-points">
        <label className="time-point__wrapper">
          Today
          <input type="checkbox"
                 id="today"
                 defaultChecked={true}
                 onClick={handleChecker}
                 />
        </label>
        <label className="time-point__wrapper">
          7 days ago
          <input type="checkbox"
                 id="seven"
                 onClick={handleChecker}
                 />
        </label>
        <label className="time-point__wrapper">
          30 days ago
          <input type="checkbox"
                 id="thirty"
                 onClick={handleChecker}
                 />
        </label>
        <label className="time-point__wrapper">
          1 year ago
          <input type="checkbox"
                 id="year"
                 onClick={handleChecker}
                 />
        </label>
      </div>
    </aside>
  )
}

const mapStateToProps = state => {
  return {
    currencyType: state.currency.currencyType
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: (filterType, currencyType) => dispatch(setFilter(filterType, currencyType)),
    deleteFilter: (filterType, currencyType) => dispatch(deleteFilter(filterType, currencyType))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)