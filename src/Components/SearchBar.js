import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term);
        console.log('onSearch is called with term:', term);
    };

    return (
        <div className="input-group mb-3 search-bar">
            <input
                type="text"
                className="form-control"
                placeholder="Search Products"
                value={searchTerm}
                onChange={handleChange}
            />
            <button className="btn btn-outline-secondary" type="button">
                Search
            </button>
        </div>
    );
};