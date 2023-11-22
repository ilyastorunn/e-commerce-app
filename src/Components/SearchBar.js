import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
    return (
        <div className="input-group mb-3 search-bar">
            <input type="text" className="form-control" placeholder="Search Products" />
            <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
    )
}