import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <header>
            <h1>Expensify</h1><br/>
            <NavLink to="/" exact={true} activeClassName="is-active">Dashboard</NavLink><br/>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
        </header>
    </div>
)

export default Header;