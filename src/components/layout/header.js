import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>My Todo List</h1>
            <Link to="/todo-app-react" className="linkStyle">Home</Link> | <Link to="/about" className="linkStyle">About</Link>
        </header>
    )
}

export default Header;
