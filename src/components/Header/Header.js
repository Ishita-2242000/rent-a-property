import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="container">
        <div className="left-container">
          <div className="estatery">
            <img src="../real-estate.png" className="real-estate"></img>
            <h5>Estatery</h5>
          </div>
          <div className="list-items">
            <ul className="lists">
              <li>Rent</li>
              <li>Buy</li>
              <li>Sell</li>
              <li>
                <select className="select">
                  <option for="option1">Manageproperty</option>
                  <option for="option2">option2</option>
                  <option for="option3">option3</option>
                  <option for="option4">option4</option>
                </select>
              </li>
              <li>
                <select className="select">
                  <option for="resources">Resources</option>
                  <option for="option2">option2</option>
                  <option for="option3">option3</option>
                  <option for="option4">option4</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <div className="right-container-buttons">
            <button className="log-in">Login</button>
            <button className="signup">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
