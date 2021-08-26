import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/OLX_New_Logo.png/220px-OLX_New_Logo.png" alt="Olx Logo" />
        <div class="navbar__searchLeft">
          <SearchIcon fontSize="large" />
          <input type="text" placeholder="Indonesia" />
          <ExpandMoreIcon fontSize="large" />
        </div>
        <div className="navbar__SearchRight">
          <input type="text" placeholder="Temukan Mobil, Handphone dan lainnya..." />
          <SearchIcon className="navbar__searchIcon" />
        </div>
      </div>

      <div class="navbar__right">
        <h3>Login/register</h3>
        <Button startIcon={<AddIcon />} className="navbar__button">Jual</Button>
      </div>
    </div>
  )
}

export default Navbar;
