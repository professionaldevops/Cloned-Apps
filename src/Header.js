import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessTimeSharpIcon from '@material-ui/icons/AccessTimeSharp';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <AccountCircleIcon
                className="header_avator"
                src="photoURL"
                alt="displayName"               
                />
                <AccessTimeSharpIcon/>
            </div>
            <div className="header_search">
                <SearchIcon/>
                <input placeholder="search names"></input>

            </div>
            <div className="header_right">
                <HelpOutlineOutlinedIcon/>

            </div>
        </div>
    )
}

export default Header
