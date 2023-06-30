import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  // Check if the user object is defined before accessing its properties
  const displayName = user?.display_name;
  const imageUrl = user?.images[0]?.url;

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={displayName} src={imageUrl} />
        <h4>{displayName}</h4>
      </div>
    </div>
  );
}

export default Header;
