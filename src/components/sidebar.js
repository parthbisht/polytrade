import React from 'react'
import { Col } from "shards-react";
function sidebar() {
    return (
        <div className="sidebar">
            
        <h2 className="polytrade">POLYTRADE</h2>
        <div>
            <ul className="list-menu">
                <li  className="list-item"><i className="fas fa-user fa-icon"></i>Dashboard</li>
                <li  className="list-item"><i className="fas fa-user fa-icon"></i>Buyer</li>
                <li  className="list-item"><i className="fas fa-user fa-icon"></i>Invoices</li>
                <li  className="list-item"><i className="fas fa-user fa-icon"></i>Profile</li>
            </ul>
        </div>
        </div>
    )
}

export default sidebar
