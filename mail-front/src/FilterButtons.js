import React from 'react';
import './FilterButtons.css';

function FilterButtons() {
    return (
        <div className="filter-container">
            <div className="filter-button">
                <select>
                    <option>From</option>
                </select>
            </div>
            <div className="filter-button">
                <select>
                    <option>Any time</option>
                </select>
            </div>
            <div className="filter-button">Has attachment</div>
            <div className="filter-button">
                <select>
                    <option>To</option>
                </select>
            </div>
        </div>
    );
}

export default FilterButtons;
