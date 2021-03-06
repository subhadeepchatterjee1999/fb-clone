import React from 'react';
import '../css/header.css';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "../StateProvider.js";
function Header(props) {
  const[{user}, dispatch] = useStateValue();
  return(
    <div className="header">
      <div className="header_left">
        <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="" />
      <div className="header_input">
        <SearchIcon />
        <input type="text" name="" value="" placeholder="Search Facebook" />
      </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option--active">
          <HomeIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large"/>
        </div>
        <div className="header_option">
          <SupervisedUserCircleOutlinedIcon fontSize="large"/>
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>

      </div>
    </div>
  )
}
export default Header;
