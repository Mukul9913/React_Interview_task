import React from "react";
import "../../style/Header.css";
import SearchIcon from "../../assets/svgs/SearchIcon";
import NotificationIcon from "../../assets/svgs/NotificationIcon";
import ChatIcon from "../../assets/svgs/chatIcon";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  return (
    <>
      <header>
        <div className="search-bar">
          <button>
            <SearchIcon />
          </button>
          <input type="text" placeholder="Type to search..." />
        </div>
        <div className="header-info">
          <ul>
            <li>
              <a>
                <NotificationIcon />
              </a>
            </li>
            <li>
              <a>
                <ChatIcon />
              </a>
            </li>
          </ul>
          <div className="user">
          <span className="user-box">
            <span className="name">Thomas Anree</span>
            <span className="role">UX Designer</span>
          </span>
          <img src="https://demo.tailadmin.com/src/images/user/user-01.png" alt="User" />
          <ExpandMoreIcon/>
        </div>
        </div>
  
        
      </header>
    </>
  );
};

export default Header;
