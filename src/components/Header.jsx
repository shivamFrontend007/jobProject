import React from 'react';
import "./Header.css";

export default function Header() {
    return (
        <div className='header'>
            <a href="#" className='logo'>MarkTech</a>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#plans">Our Plans</a>
                <a href="#users">Search Users</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}
