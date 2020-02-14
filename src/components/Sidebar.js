import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="time-points">
        <label className="time-point__wrapper">
          Today
          <input type="checkbox"/>
        </label>
        <label className="time-point__wrapper">
          7 days ago
          <input type="checkbox"/>
        </label>
        <label className="time-point__wrapper">
          30 days ago
          <input type="checkbox"/>
        </label>
        <label className="time-point__wrapper">
          1 year ago
          <input type="checkbox"/>
        </label>
      </div>
    </aside>
  )
}